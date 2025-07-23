import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, User, Phone } from "lucide-react";

const mockUsers = [
  { username: "greenfarmer", business: "Green Valley Farms", phone: "+61 400 123 456" },
  { username: "orchardqueen", business: "Orchard Queen Produce", phone: "+61 400 654 321" },
  { username: "urbanroots", business: "Urban Roots Collective", phone: "+61 400 987 654" },
  { username: "seedlingman", business: "Seedling Man Nursery", phone: "+61 400 321 987" }
];

const mockMessages = [
  { from: "greenfarmer", text: "Hi! Anyone selling organic compost?" },
  { from: "orchardqueen", text: "Looking for a used tractor in VIC." },
  { from: "urbanroots", text: "We have surplus kale this week!" }
];

const ChatRoomPage = () => {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(mockMessages);

  const filteredUsers = mockUsers.filter(
    u =>
      u.username.toLowerCase().includes(search.toLowerCase()) ||
      u.business.toLowerCase().includes(search.toLowerCase()) ||
      u.phone.includes(search)
  );

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { from: "you", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16 flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 drop-shadow-lg text-center">Peer-to-peer Chat Room</h1>
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search by username, business, or phone number..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-green-200 bg-white text-green-900 text-lg font-semibold shadow focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>
        <div className="mb-8 grid md:grid-cols-2 gap-6">
          {filteredUsers.map((u, idx) => (
            <Card key={idx} className="bg-white/95 rounded-2xl shadow-xl p-4 flex flex-col gap-2">
              <CardHeader className="flex flex-row items-center gap-3">
                <User className="h-6 w-6 text-green-700" />
                <CardTitle className="text-lg text-green-900 font-bold">{u.username}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-green-800 font-medium mb-1">{u.business}</div>
                <div className="flex items-center gap-2 text-green-700 text-sm">
                  <Phone className="h-4 w-4" /> {u.phone}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-white/95 rounded-2xl shadow-xl p-6 mb-8">
          <div className="mb-4 flex items-center gap-2">
            <MessageCircle className="h-6 w-6 text-green-700" />
            <span className="text-green-900 font-bold text-lg">Chat Room</span>
          </div>
          <div className="h-48 overflow-y-auto bg-green-50 rounded-lg p-3 mb-4">
            {messages.map((m, idx) => (
              <div key={idx} className={"mb-2 " + (m.from === "you" ? "text-right" : "text-left") }>
                <span className={m.from === "you" ? "text-green-900 font-bold" : "text-green-700 font-semibold"}>{m.from}: </span>
                <span className="text-green-900">{m.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex gap-3">
            <Input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="flex-1 px-4 py-2 rounded-xl border-2 border-green-200 bg-white text-green-900 text-base shadow"
            />
            <Button type="submit" className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold">Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomPage; 