import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { AppContext } from "@/contexts/AppContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const MessageList = () => {
  const [listMessage, setListMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  const { backendUrl } = useContext(AppContext);

  const fetchMessageList = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${backendUrl}/message/list`);
      if (data.success) {
        setListMessage(data.messageList || []);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessageList();
  }, []);

  return (
    <section className="w-full mb-3">
      {loading ? (
        <Loader />
      ) : (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {listMessage.length > 0 ? (
                  listMessage.map((message) => (
                    <tr
                      key={message._id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <td className="px-4 py-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 max-w-[120px] sm:max-w-[180px] truncate">
                          {message.name}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 max-w-[120px] sm:max-w-[180px] truncate">
                          {message.email}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 max-w-[120px] sm:max-w-[180px] truncate">
                          {message.message}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4" // Fixed: Changed from 5 to 4 to match number of columns
                      className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <span>No messages found</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={fetchMessageList}
                        >
                          Refresh
                        </Button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default MessageList;
