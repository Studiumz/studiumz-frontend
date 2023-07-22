import React from "react";

interface RespondeeBubbleProps {
  message: string;
}

export const RespondeeBubble: React.FC<RespondeeBubbleProps> = ({
  message,
}) => {
  return (
    <div className="chat-message">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-violet text-white">
              {message}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
