// components/Notification.js

import { useEffect, useState } from "react";

const notificationMessages = [
  "Karen McKlin just made a profit of $2,000 from fixed capital",
  "Jordan Gabriel withdrew 10,000 from mining",
  "Alice James just earned $500 from fixed capital",
  "Michael Sun withdrew 5,000 from mining",
  "Samuel Bright just made a profit of $1,500 from fixed capital",
];

export default function Notification() {
  const [notification, setNotification] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  // Function to trigger notification popup every 2 minutes
  useEffect(() => {
    const notificationInterval = setInterval(() => {
      const randomMessage =
        notificationMessages[
          Math.floor(Math.random() * notificationMessages.length)
        ];
      setNotification(randomMessage);
      setShowNotification(true);

      // Hide the notification after 10 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 10000);
    }, 60000); // 2 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(notificationInterval);
  }, []);

  return (
    <>
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-bluey text-white p-4 rounded-md shadow-lg z-50 transition-opacity duration-300">
          {notification}
        </div>
      )}
    </>
  );
}
