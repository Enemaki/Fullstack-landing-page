from django.shortcuts import render

from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer, RegistrationSerializer, LoginSerializer
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth.models import update_last_login
from rest_framework.views import APIView


from rest_framework.authtoken.models import Token

@api_view(['GET', 'POST'])
def product_List(request):
    
    if request.method == 'GET':
        
        products = Product.objects.all()
        
        serializer = ProductSerializer(products, many=True)
        
        return Response(serializer.data)
    
    if request.method == 'POST':
        
        serializer = ProductSerializer(data=request.data)
        
        if serializer.is_valid():
            
            serializer.save()
            
            return Response(serializer.data)
        
        return Response(status.HTTP_204_NO_CONTENT)
        
@api_view(['GET', 'PUT', 'DELETE'])
def product(request, pk):
    
    try:
        product = Product.objects.get(id=pk)
        
    except Product.DoesNotExist():
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        
        serializer = ProductSerializer(product)
        
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        
        serializer = ProductSerializer(product,data=request.data)
        
        if serializer.is_valid():
            
            serializer.save()
            
            return Response(serializer.data)
        
        return Response(status.HTTP_204_NO_CONTENT)
        
    elif request.method == 'DELETE':
        
        product.delete()
        
        return Response(status.HTTP_204_NO_CONTENT)
    
@api_view(['POST'])
def register(request):
    
    if request.method == 'POST':
        
        serializer = RegistrationSerializer(data=request.data)
        
        data = {}
        
        if serializer.is_valid():
            
            user = serializer.save()
            
            data['response'] = 'Successfully registered a new user'
            
            auth_token = Token.objects.get(user=user).key
            
            data['token'] = auth_token
            
        else:
            
            data = serializer.errors
            
        return Response(data)

class LoginAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        update_last_login(None, user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({"status": status.HTTP_200_OK, "Token": token.key})
