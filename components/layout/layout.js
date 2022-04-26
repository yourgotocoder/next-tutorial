import React, { useContext } from "react";
import Notification from "../UI/Notification";
import MainHeader from "./main-header";
import NotificationContext from "../../store/notification-context";

const Layout = (props) => {
    const notificationContext = useContext(NotificationContext);

    const activeNotificatoin = notificationContext.notifcation;
    return (
        <>
            {activeNotificatoin && (
                <Notification
                    title={activeNotificatoin.title}
                    message={activeNotificatoin.message}
                    status={activeNotificatoin.status}
                />
            )}
            <MainHeader />
            <main>{props.children}</main>
        </>
    );
};

export default Layout;
