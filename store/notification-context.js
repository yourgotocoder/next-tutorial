import { createContext, useState } from "react";

const NotificationContext = createContext({
    notifcation: null,
    showNotification: (notificationData) => {},
    hideNotification: () => {},
});

export const NotificationContextProvider = (props) => {
    const [activeNotificatoin, setActiveNotification] = useState();

    function showNotificationHandler(notificationData) {
        setActiveNotification(notificationData);
    }

    function hideNotificationHandler() {
        setActiveNotification(null);
    }

    const context = {
        notifcation: activeNotificatoin,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
    };

    return (
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
    );
};

export default NotificationContext;
