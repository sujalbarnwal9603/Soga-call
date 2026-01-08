// Dashboard.jsx
import { useState } from "react";
import { UserPlus, Phone, Trash2 } from "lucide-react";

const Dashboard = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: "Aarav Sharma", status: "online", img: "" },
    { id: 2, name: "Priya Patel", status: "offline", img: "" },
    { id: 3, name: "Rohan Mehta", status: "online", img: "" },
  ]);

  const [newFriend, setNewFriend] = useState("");

  const addFriend = (e) => {
    e.preventDefault();
    if (!newFriend.trim()) return;
    setFriends([
      ...friends,
      { id: Date.now(), name: newFriend, status: Math.random() > 0.5 ? "online" : "offline" },
    ]);
    setNewFriend("");
  };

  const removeFriend = (id) => {
    setFriends(friends.filter((f) => f.id !== id));
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#050816] via-[#111827] to-[#020617] text-slate-100">
      {/* LEFT SIDEBAR */}
      <aside className="w-72 bg-slate-900/70 border-r border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between">
        {/* Profile Section */}
        <div>
          <div className="flex flex-col items-center text-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-3xl font-bold shadow-lg shadow-indigo-500/40">
              S
            </div>
            <h2 className="mt-3 text-lg font-semibold">Sujal Barnwal</h2>
            <p className="text-sm text-slate-400">Online</p>
          </div>

          {/* Add Friend Form */}
          <form onSubmit={addFriend} className="mt-8 space-y-3">
            <label className="block text-xs font-semibold tracking-wide text-cyan-300/80 uppercase">
              Add Friend
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={newFriend}
                onChange={(e) => setNewFriend(e.target.value)}
                placeholder="Enter username"
                className="flex-1 py-2 px-3 rounded-lg bg-slate-950/60 text-slate-100 placeholder-slate-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="p-2 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-lg text-white hover:opacity-90 transition-all shadow-lg shadow-indigo-500/40"
              >
                <UserPlus className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Logout Button */}
        <button className="mt-8 w-full py-2 text-sm text-slate-400 hover:text-cyan-300 transition-all border-t border-white/10 pt-3">
          Log out
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-6">Your Friends</h1>

        {/* Friends List */}
        {friends.length === 0 ? (
          <p className="text-slate-400 text-sm">No friends added yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center justify-between bg-slate-900/70 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-lg shadow-slate-950/50 hover:border-cyan-400/40 transition-all"
              >
                {/* Avatar & Info */}
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-lg font-bold">
                    {friend.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{friend.name}</p>
                    <p
                      className={`text-xs ${
                        friend.status === "online"
                          ? "text-emerald-400"
                          : "text-slate-500"
                      }`}
                    >
                      ● {friend.status}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    title="Start Call"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-cyan-500/70 text-cyan-300 hover:text-white transition-all"
                  >
                    <Phone className="w-4 h-4" />
                  </button>
                  <button
                    title="Remove Friend"
                    onClick={() => removeFriend(friend.id)}
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-rose-500/70 text-rose-400 hover:text-white transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
