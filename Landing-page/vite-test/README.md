## Landing Page with Secure User Management (React, Vite, Django REST Framework)

This project is a full-stack web application featuring a landing page built with React and Vite on the frontend, and a Django REST Framework API on the backend. It showcases a user registration, login, and authorization flow, ensuring secure user management.

**Features:**

**Frontend (React/Vite):**

  * **Landing Page:** A visually appealing landing page to introduce your product or service.
  * **Create Account:** Users can register for an account with necessary information.
  * **Login:** Existing users can log in with secure authentication.
  * **Responsive Design:** The landing page adapts to different screen sizes for optimal viewing on any device.

**Backend (Django REST Framework):**

  * **User Management:** Secure user registration, login, and authorization.
  * **API Endpoints:** Exposes endpoints for handling user registration, login, and potential future functionalities (e.g., user profiles).
  * **Authentication:** Implements token-based authentication for secure access to protected resources.

**Note:** This project establishes a secure foundation for user management. Future enhancements could include features like user profiles, email verification, and password reset functionality.

### Technologies Used

**Frontend:**

  * HTML
  * CSS
  * JavaScript
  * Vite React (vitejs.dev [invalid URL removed])

**Backend:**

  * Python (3.x)
  * Django ([Django Web Framework](https://www.google.com/url?sa=E&source=gmail&q=https://www.djangoproject.com/))
  * Django REST Framework ([Django REST framework](https://www.google.com/url?sa=E&source=gmail&q=https://www.django-rest-framework.org/))

### Setup Instructions

**Frontend (React/Vite):**

1.  **Clone the Repository:**

<!-- end list -->

```bash
git clone https://github.com/your-username/landing-auth-fullstack.git
```

2.  **Navigate to the Frontend Directory:**

<!-- end list -->

```bash
cd frontend
```

3.  **Install Dependencies:**

<!-- end list -->

```bash
npm install
```

4.  **Run the Frontend Development Server:**

<!-- end list -->

```bash
npm run dev
```

This will start the React development server and open the app in your default browser at http://localhost:5173/.

**Backend (Django REST Framework):**

1.  **Clone the Repository (if not already done):**

<!-- end list -->

```bash
git clone https://github.com/your-username/landing-auth-fullstack.git
```

2.  **Navigate to the Backend Directory:**

<!-- end list -->

```bash
cd backend
```

3.  **Create a Virtual Environment (recommended):**

<!-- end list -->

```bash
python3 -m venv venv
source venv/bin/activate
```

4.  **Install Dependencies:**

<!-- end list -->

```bash
pip install -r requirements.txt
```

5.  **Run Django Migrations:**

<!-- end list -->

```bash
python manage.py migrate
```

6.  **Run Django Development Server:**

<!-- end list -->

```bash
python manage.py runserver
```

This will start the Django development server and expose the API at http://127.0.0.1:8000/ by default.

**Important:**

  * Make sure the Django development server is running before starting the React development server.
  * Configure environment variables in both the frontend and backend to specify the API endpoint URL. This typically involves creating a `.env` file in each directory and setting variables like `REACT_APP_API_URL`.

**Understanding the Code:**

Explore the project code to see how the frontend and backend interact:

  * **Frontend:**
      * User input for registration and login is handled by the React components.
      * Authentication tokens received from the API are stored securely (e.g., local storage with appropriate security measures).
      * API calls are made for user registration, login, and potential future functionalities.
  * **Backend:**
      * Django REST Framework views handle user registration, login, and token generation.
      * Serializers define how data is formatted for API responses and requests.
      * Authentication and authorization mechanisms ensure secure access to protected resources.

### Contributing

This project provides a solid foundation for secure user management. Feel free to fork the repository and enhance it\! You can explore features like:

  * User profiles (frontend and backend implementation)
  * Email verification for registration
  * Password reset functionality
  * Implementing different authentication methods (e.g., social logins)

### License

This project is licensed under the MIT License. See the LICENSE file for details.
