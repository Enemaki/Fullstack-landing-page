import CreateHeader from "./components/CreateHeader"
import CreateForm from "./components/CreateForm"
import CreateLink from "./components/CreateLink"
import CreateFooter from "./components/CreateFooter"
export default function Home() {
    return (
        <div>
          <CreateHeader />
          <CreateForm />
          <CreateLink />
          <CreateFooter />
        </div>
    )
}