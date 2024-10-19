// components/Notification.js

import { useEffect, useState } from "react";

const notificationMessages = [
  "Karen McKlin just made a profit of $2,000 from fixed capital",
  "Jordan Gabriel withdrew 10,000 from mining",
  "Alice James just earned $500 from fixed capital",
  "Michael Sun withdrew 5,000 from mining",
  "Samuel Bright just made a profit of $1,500 from fixed capital",
  "Emily Clarkson just made a profit of $3,200 from fixed capital",
  "Chris Martin withdrew 20,000 from mining",
  "Olivia Brown just earned $700 from fixed capital",
  "David Green withdrew 15,000 from mining",
  "Sophia Turner just made a profit of $1,800 from fixed capital",
  "John Doe just earned $1,000 from fixed capital",
  "Mary Jane withdrew 8,000 from mining",
  "Lisa White just made a profit of $2,500 from fixed capital",
  "Robert Johnson withdrew 12,000 from mining",
  "Sarah Miller just earned $600 from fixed capital",
  "James Brown withdrew 6,000 from mining",
  "Patricia Davis just made a profit of $1,700 from fixed capital",
  "Charles Wilson withdrew 18,000 from mining",
  "Megan Taylor just earned $400 from fixed capital",
  "Mark Anderson withdrew 9,000 from mining",
  "Jennifer Thomas just made a profit of $3,000 from fixed capital",
  "Daniel Scott withdrew 4,500 from mining",
  "Jessica Lewis just earned $1,100 from fixed capital",
  "Henry Harris withdrew 7,500 from mining",
  "Catherine Adams just made a profit of $2,200 from fixed capital",
  "Peter King withdrew 11,000 from mining",
  "Rachel Baker just earned $800 from fixed capital",
  "Arthur Young withdrew 5,500 from mining",
  "Isabella Hill just made a profit of $1,400 from fixed capital",
  "Steven Clark withdrew 9,500 from mining",
  "Sophia Green just earned $950 from fixed capital",
  "Matthew Lee withdrew 13,000 from mining",
  "Karen Lopez just made a profit of $2,100 from fixed capital",
  "George Harris withdrew 14,500 from mining",
  "Anna Perez just earned $1,300 from fixed capital",
  "Edward Walker withdrew 7,800 from mining",
  "Susan Hall just made a profit of $1,900 from fixed capital",
  "Benjamin Allen withdrew 5,200 from mining",
  "Chloe Wright just earned $1,200 from fixed capital",
  "William Mitchell withdrew 12,400 from mining",
  "Emma Martinez just made a profit of $2,600 from fixed capital",
  "Michael Phillips withdrew 10,800 from mining",
  "Lucy Carter just earned $1,700 from fixed capital",
  "Ryan Turner withdrew 13,200 from mining",
  "Ella Rogers just made a profit of $2,000 from fixed capital",
  "Alexander Foster withdrew 11,600 from mining",
  "Ava Parker just earned $1,900 from fixed capital",
  "Mason Stewart withdrew 15,000 from mining",
  "Grace Russell just made a profit of $2,500 from fixed capital",
  "Nathan Ward withdrew 6,200 from mining",
  "Sophie Collins just earned $800 from fixed capital",
  "Ethan Howard withdrew 7,100 from mining",
  "Chloe Morris just made a profit of $1,500 from fixed capital",
  "Luke Bell withdrew 14,000 from mining",
  "Charlotte Cook just earned $2,300 from fixed capital",
  "Jack Cooper withdrew 16,500 from mining",
  "Harper Morgan just made a profit of $3,100 from fixed capital",
  "Liam Price withdrew 13,300 from mining",
  "Lily Rivera just earned $2,200 from fixed capital",
  "Owen Bailey withdrew 12,000 from mining",
  "Amelia Reed just made a profit of $1,600 from fixed capital",
  "Gabriel Foster withdrew 10,000 from mining",
  "Isabella Henderson just earned $2,400 from fixed capital",
  "Noah Long withdrew 11,200 from mining",
  "Mia Simmons just made a profit of $1,700 from fixed capital",
  "Jacob Hamilton withdrew 15,300 from mining",
  "Charlotte Russell just earned $2,100 from fixed capital",
  "Daniel Powell withdrew 9,800 from mining",
  "Zoe Peterson just made a profit of $1,900 from fixed capital",
  "Caleb Sanders withdrew 14,700 from mining",
  "Layla Ward just earned $2,500 from fixed capital",
  "Connor Hughes withdrew 8,500 from mining",
  "Ella Rivera just made a profit of $1,300 from fixed capital",
  "Isaac Butler withdrew 12,900 from mining",
  "Scarlett Torres just earned $2,700 from fixed capital",
  "Lucas Perry withdrew 10,300 from mining",
  "Maya Barnes just made a profit of $2,000 from fixed capital",
  "Samuel Brooks withdrew 13,700 from mining",
  "Avery Powell just earned $1,800 from fixed capital",
  "Logan Edwards withdrew 16,000 from mining",
  "Eleanor Gray just made a profit of $1,400 from fixed capital",
  "Hudson Russell withdrew 10,500 from mining",
  "Aria Foster just earned $2,600 from fixed capital",
  "Dylan Evans withdrew 7,300 from mining",
  "Hazel Bailey just made a profit of $1,500 from fixed capital",
  "Sebastian Lee withdrew 12,600 from mining",
  "Madison Ward just earned $2,200 from fixed capital",
  "Caleb Brooks withdrew 8,900 from mining",
  "Ella James just made a profit of $2,300 from fixed capital",
  "Levi Simmons withdrew 11,100 from mining",
  "Lily Brown just earned $1,600 from fixed capital",
  "Isaac Nelson withdrew 14,100 from mining",
  "Sophia Anderson just made a profit of $2,500 from fixed capital",
  "Elijah Moore withdrew 9,600 from mining",
  "Mia Flores just earned $1,800 from fixed capital",
  "Jackson Howard withdrew 10,200 from mining",
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
    }, 30000); // 2 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(notificationInterval);
  }, []);

  return (
    <>
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-bluey text-white p-4 rounded-md shadow-lg z-50 transition-opacity duration-300">
          <p>{notification}</p>
        </div>
      )}
    </>
  );
}
