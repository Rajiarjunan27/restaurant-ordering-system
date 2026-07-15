import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

import "./AdminLayout.css";

function AdminLayout({

    title,
    subtitle,
    children

}){

    return(

        <div className="admin-layout">

            <AdminSidebar/>

            <div className="admin-main">

                <AdminHeader
                    title={title}
                    subtitle={subtitle}
                />

                <main className="admin-content">

                    {children}

                </main>

            </div>

        </div>

    );

}

export default AdminLayout;