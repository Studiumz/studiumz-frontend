import React from "react";

interface ResponderBubbleProps {
  message: string;
}

export const ResponderBubble: React.FC<ResponderBubbleProps> = ({
  message,
}) => {
  return (
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gray-300 text-gray-600 ">
              {message}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
