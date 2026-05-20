import Header from "./Header"
import Sidebar from "./Sidebar"

const LayoutWrapper = ({ children }) => {

    return (
        <div className="min-h-screen bg-[#F5F7FB]">

            <Header />

            <div className="flex">

                <Sidebar />

                <main className="flex-1 p-8">
                    {children}
                </main>

            </div>

        </div>
    )
}

export default LayoutWrapper