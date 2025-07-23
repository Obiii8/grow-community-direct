import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { TrendingUp, Clock, Users, ShoppingCart, DollarSign, X, MessageCircle } from 'lucide-react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

// Dummy data for MVP
const dummyProducts = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    initialPrice: 3.2,
    currentPrice: 3.5,
    buyNowPrice: 4.0,
    currency: 'AUD',
    expiry: '2024-07-10',
    viewers: 7,
    delivery: true,
    pickup: true,
    bulk: true,
    auctionEnds: '2024-07-01T18:00:00Z',
    image: '/placeholder.svg',
    category: 'Crops',
    description: 'Fresh organic tomatoes grown locally. Perfect for salads and sauces.',
  },
  {
    id: 2,
    name: 'Free Range Eggs',
    initialPrice: 6.0,
    currentPrice: 6.8,
    buyNowPrice: 7.5,
    currency: 'USD',
    expiry: '2024-07-05',
    viewers: 3,
    delivery: false,
    pickup: true,
    bulk: false,
    auctionEnds: '2024-07-02T12:00:00Z',
    image: '/placeholder.svg',
    category: 'Livestock',
    description: 'Farm-fresh free range eggs. Collected daily for maximum freshness.',
  },
  {
    id: 3,
    name: 'Fresh Basil (Bulk)',
    initialPrice: 12.0,
    currentPrice: 13.2,
    buyNowPrice: 14.0,
    currency: 'ETH',
    expiry: '2024-07-12',
    viewers: 12,
    delivery: true,
    pickup: false,
    bulk: true,
    auctionEnds: '2024-07-03T09:00:00Z',
    image: '/placeholder.svg',
    category: 'Crops',
    description: 'Bulk fresh basil for restaurants and food producers.',
  },
  {
    id: 4,
    name: 'Tractor (Used)',
    initialPrice: 5000,
    currentPrice: 5200,
    buyNowPrice: 6000,
    currency: 'AUD',
    expiry: '2024-07-20',
    viewers: 2,
    delivery: false,
    pickup: true,
    bulk: false,
    auctionEnds: '2024-07-10T15:00:00Z',
    image: '/placeholder.svg',
    category: 'Equipment',
    description: 'Reliable used tractor, recently serviced. Great for small farms.',
  },
];

const currencies = ['AUD', 'USD', 'XRP', 'BTC', 'ETH', 'SOL'];
const categories = ['All', 'Crops', 'Livestock', 'Inputs', 'Equipment'];

// Dummy data for recommendations and trending
const buyersAlsoLike = [dummyProducts[2], dummyProducts[1]];
const trendingAuctions = [dummyProducts[0], dummyProducts[3]];
const recentlyViewed = [dummyProducts[1], dummyProducts[0]];

// Dummy inventory for MVP
const dummyInventory = [
  { id: 1, name: 'Pumpkin Seeds', qty: 20, unit: 'kg' },
  { id: 2, name: 'Organic Honey', qty: 5, unit: 'jars' },
  { id: 3, name: 'Compost', qty: 50, unit: 'kg' },
];

// Dummy users for chat
const dummyUsers = [
  { id: 1, username: 'greenfarmer', display: 'Green Farmer' },
  { id: 2, username: 'orchardqueen', display: 'Orchard Queen' },
  { id: 3, username: 'urbanroots', display: 'Urban Roots' },
  { id: 4, username: 'seedlingman', display: 'Seedling Man' },
];

const MarketplacePage = () => {
  const [currency, setCurrency] = useState('AUD');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [tradeText, setTradeText] = useState('');
  const messageInputRef = useRef(null);
  const tradeInputRef = useRef(null);

  // Product detail modal
  const openDetail = (product) => {
    setSelectedProduct(product);
    setShowDetail(true);
  };
  const closeDetail = () => {
    setShowDetail(false);
    setSelectedProduct(null);
  };
  const openMessageModal = () => {
    setShowMessageModal(true);
    setTimeout(() => messageInputRef.current && messageInputRef.current.focus(), 100);
  };
  const closeMessageModal = () => {
    setShowMessageModal(false);
    setMessageText('');
  };
  const openTradeModal = () => {
    setShowTradeModal(true);
    setTimeout(() => tradeInputRef.current && tradeInputRef.current.focus(), 100);
  };
  const closeTradeModal = () => {
    setShowTradeModal(false);
    setTradeText('');
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    closeMessageModal();
    alert('Message sent (dummy)!');
  };
  const handleSendTrade = (e) => {
    e.preventDefault();
    closeTradeModal();
    alert('Trade offer sent (dummy)!');
  };

  // Toast notifications
  const { toast } = useToast();

  // Inventory management state
  const [inventory, setInventory] = useState(dummyInventory);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState('');
  const [newItemUnit, setNewItemUnit] = useState('');

  const handleAddInventory = (e) => {
    e.preventDefault();
    if (!newItemName.trim() || !newItemQty || !newItemUnit.trim()) return;
    setInventory([
      ...inventory,
      { id: Date.now(), name: newItemName, qty: Number(newItemQty), unit: newItemUnit },
    ]);
    setNewItemName('');
    setNewItemQty('');
    setNewItemUnit('');
    toast({ title: 'Inventory item added!' });
  };
  const handleRemoveInventory = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
    toast({ title: 'Inventory item removed.' });
  };

  // Advanced chat: user-to-user
  const [chatUser, setChatUser] = useState(dummyUsers[0]);
  const [userChats, setUserChats] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ff_marketplace_userchats') || '{}');
    } catch {
      return {};
    }
  });
  useEffect(() => {
    localStorage.setItem('ff_marketplace_userchats', JSON.stringify(userChats));
  }, [userChats]);
  // Use only the advanced user-to-user chat logic for persistent chat
  const chatHistory = userChats[chatUser.username] || [];
  const [chatMessage, setChatMessage] = useState('');
  const [showChat, setShowChat] = useState(false);

  const handleSendChat = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      const updated = {
        ...userChats,
        [chatUser.username]: [
          ...(userChats[chatUser.username] || []),
          { from: 'you', text: chatMessage, time: new Date().toLocaleTimeString() },
        ],
      };
      setUserChats(updated);
      setChatMessage('');
    }
  };

  // Advanced inventory management
  const [editItemId, setEditItemId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editQty, setEditQty] = useState('');
  const [editUnit, setEditUnit] = useState('');
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [transferItem, setTransferItem] = useState(null);
  const [transferTo, setTransferTo] = useState(dummyUsers[1].username);
  const [transferAmount, setTransferAmount] = useState('');

  const startEditItem = (item) => {
    setEditItemId(item.id);
    setEditName(item.name);
    setEditQty(item.qty.toString());
    setEditUnit(item.unit);
  };
  const saveEditItem = (e) => {
    e.preventDefault();
    setInventory(inventory.map(item => item.id === editItemId ? { ...item, name: editName, qty: Number(editQty), unit: editUnit } : item));
    setEditItemId(null);
    toast({ title: 'Inventory item updated.' });
  };
  const cancelEditItem = () => {
    setEditItemId(null);
  };
  const openTransferModal = (item) => {
    setTransferItem(item);
    setTransferTo(dummyUsers[1].username);
    setTransferAmount('');
    setShowTransferModal(true);
  };
  const closeTransferModal = () => {
    setShowTransferModal(false);
    setTransferItem(null);
    setTransferAmount('');
  };
  const handleTransfer = (e) => {
    e.preventDefault();
    if (!transferItem || !transferAmount || isNaN(Number(transferAmount)) || Number(transferAmount) <= 0) return;
    setInventory(inventory.map(item => item.id === transferItem.id ? { ...item, qty: item.qty - Number(transferAmount) } : item));
    closeTransferModal();
    toast({ title: `Transferred ${transferAmount} ${transferItem.unit} of ${transferItem.name} to ${dummyUsers.find(u => u.username === transferTo).display}` });
  };

  // Real-time notifications for chat and trade offers (simulate with useEffect)
  useEffect(() => {
    if (chatHistory.length && chatHistory[chatHistory.length - 1].from !== 'you') {
      toast({ title: `New message from ${chatUser.display}` });
    }
  }, [chatHistory, chatUser, toast]);
  // Simulate trade offer notification
  useEffect(() => {
    if (showTradeModal === false && tradeText) {
      toast({ title: 'Trade offer sent!' });
    }
    // eslint-disable-next-line
  }, [showTradeModal]);

  // Filter products based on currency, search, and category
  const filteredProducts = dummyProducts.filter(product => {
    const matchesCurrency = currency === 'All' || product.currency === currency;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    return matchesCurrency && matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
      {/* Hero Section */}
      <section className="py-16 bg-white/90 border-b border-green-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 mb-4 drop-shadow-lg" style={{ letterSpacing: '0.03em' }}>
            Freedom Farms Marketplace
          </h1>
          <p className="text-xl md:text-2xl text-green-800 mb-8 max-w-2xl mx-auto font-medium">
            The central hub for digital trade—transparent, fair, and empowering for farmers, retailers, and consumers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-green-900">Currency:</span>
              <select
                className="border border-green-300 rounded px-3 py-2 text-green-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
                value={currency}
                onChange={e => setCurrency(e.target.value)}
              >
                <option value="All">All</option>
                {currencies.map(cur => (
                  <option key={cur} value={cur}>{cur}</option>
                ))}
              </select>
            </div>
            <Input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-64 border-green-300"
            />
          </div>
          <div className="flex gap-6 justify-center text-green-800 text-sm mb-2">
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> 23 users online</span>
            <span className="flex items-center gap-1"><TrendingUp className="h-4 w-4" /> 5 auctions ending soon</span>
          </div>
          {/* Category Tabs */}
          <div className="flex gap-2 justify-center mt-4 mb-2 flex-wrap">
            {categories.map(cat => (
              <Button
                key={cat}
                size="sm"
                variant={category === cat ? 'default' : 'outline'}
                className={category === cat ? 'bg-green-700 text-white' : 'bg-white text-green-700 border-green-700'}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Listings Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.length === 0 ? (
              <div className="col-span-3 text-center text-green-900 font-semibold text-lg">No products found for this filter.</div>
            ) : (
              filteredProducts.map(product => (
                <Card key={product.id} className="bg-white shadow-card hover:shadow-lg transition-all duration-300 border border-green-100 cursor-pointer" onClick={() => openDetail(product)}>
                  <CardHeader>
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-3" />
                    <CardTitle className="text-xl font-bold text-green-900 mb-1">{product.name}</CardTitle>
                    <CardDescription className="text-green-800 mb-2">Expiry: {product.expiry}</CardDescription>
                    <div className="flex gap-2 mb-2">
                      {product.bulk && <Badge variant="secondary" className="bg-green-100 text-green-900">Bulk</Badge>}
                      {product.delivery && <Badge variant="secondary" className="bg-blue-100 text-blue-900">Delivery</Badge>}
                      {product.pickup && <Badge variant="secondary" className="bg-yellow-100 text-yellow-900">Pickup</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-green-700" />
                      <span className="text-sm text-green-900 font-medium">Auction ends: {new Date(product.auctionEnds).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-green-700" />
                      <span className="text-sm text-green-900">{product.viewers} viewing</span>
                    </div>
                    <div className="flex gap-4 items-center mb-4">
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-muted-foreground">Initial</span>
                        <span className="font-bold text-green-900">{product.initialPrice} {product.currency}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-muted-foreground">Current</span>
                        <span className="font-bold text-blue-700">{product.currentPrice} {product.currency}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-muted-foreground">Buy Now</span>
                        <span className="font-bold text-primary">{product.buyNowPrice} {product.currency}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-primary text-white font-bold flex-1">Buy Now</Button>
                      <Button size="sm" variant="outline" className="flex-1 border-green-700 text-green-700 font-bold">Make Offer</Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {showDetail && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 relative animate-fade-in">
            <button className="absolute top-4 right-4 text-green-900 hover:text-red-600" onClick={closeDetail} aria-label="Close product details"><X className="h-6 w-6" /></button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold text-green-900 mb-2">{selectedProduct.name}</h2>
            <p className="text-green-800 mb-2">{selectedProduct.description}</p>
            <div className="flex gap-2 mb-2">
              {selectedProduct.bulk && <Badge variant="secondary" className="bg-green-100 text-green-900">Bulk</Badge>}
              {selectedProduct.delivery && <Badge variant="secondary" className="bg-blue-100 text-blue-900">Delivery</Badge>}
              {selectedProduct.pickup && <Badge variant="secondary" className="bg-yellow-100 text-yellow-900">Pickup</Badge>}
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-green-900 mb-2">Your Inventory (for Trade/Barter)</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {inventory.map(item => (
                  <span key={item.id} className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-xs font-semibold border border-green-300 flex items-center gap-1">
                    {editItemId === item.id ? (
                      <form className="flex gap-1 items-center" onSubmit={saveEditItem}>
                        <input type="text" value={editName} onChange={e => setEditName(e.target.value)} className="border border-green-300 rounded px-1 w-16 text-xs" required aria-label="Edit name" />
                        <input type="number" min="1" value={editQty} onChange={e => setEditQty(e.target.value)} className="border border-green-300 rounded px-1 w-10 text-xs" required aria-label="Edit qty" />
                        <input type="text" value={editUnit} onChange={e => setEditUnit(e.target.value)} className="border border-green-300 rounded px-1 w-10 text-xs" required aria-label="Edit unit" />
                        <button type="submit" className="text-green-700 font-bold ml-1">✔</button>
                        <button type="button" className="text-red-600 font-bold ml-1" onClick={cancelEditItem}>✖</button>
                      </form>
                    ) : (
                      <>
                        {item.name} ({item.qty} {item.unit})
                        <button aria-label="Edit item" className="ml-1 text-blue-700 hover:text-blue-900" onClick={() => startEditItem(item)}>✎</button>
                        <button aria-label="Remove item" className="ml-1 text-red-600 hover:text-red-800" onClick={() => handleRemoveInventory(item.id)}>&times;</button>
                        <button aria-label="Transfer item" className="ml-1 text-yellow-700 hover:text-yellow-900" onClick={() => openTransferModal(item)}>⇄</button>
                      </>
                    )}
                  </span>
                ))}
              </div>
              <form className="flex flex-wrap gap-2 items-center" onSubmit={handleAddInventory}>
                <input type="text" placeholder="Item name" value={newItemName} onChange={e => setNewItemName(e.target.value)} className="border border-green-300 rounded px-2 py-1 text-xs" required aria-label="Item name" />
                <input type="number" min="1" placeholder="Qty" value={newItemQty} onChange={e => setNewItemQty(e.target.value)} className="border border-green-300 rounded px-2 py-1 text-xs w-16" required aria-label="Quantity" />
                <input type="text" placeholder="Unit" value={newItemUnit} onChange={e => setNewItemUnit(e.target.value)} className="border border-green-300 rounded px-2 py-1 text-xs w-16" required aria-label="Unit" />
                <Button type="submit" size="sm" className="bg-green-700 text-white font-bold px-3 py-1 rounded">Add</Button>
              </form>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <div className="flex flex-col items-center">
                <span className="text-xs text-muted-foreground">Initial</span>
                <span className="font-bold text-green-900">{selectedProduct.initialPrice} {selectedProduct.currency}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-muted-foreground">Current</span>
                <span className="font-bold text-blue-700">{selectedProduct.currentPrice} {selectedProduct.currency}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-muted-foreground">Buy Now</span>
                <span className="font-bold text-primary">{selectedProduct.buyNowPrice} {selectedProduct.currency}</span>
              </div>
            </div>
            <div className="flex gap-2 mb-4 flex-col sm:flex-row">
              <Button size="lg" className="bg-primary text-white font-bold flex-1">Buy Now</Button>
              <Button size="lg" variant="outline" className="flex-1 border-green-700 text-green-700 font-bold">Make Offer</Button>
            </div>
            <div className="flex gap-2 mb-4 flex-col sm:flex-row">
              <Button size="lg" variant="outline" className="flex-1 border-blue-700 text-blue-700 font-bold" onClick={openMessageModal}>Contact Seller</Button>
              <Button size="lg" variant="outline" className="flex-1 border-yellow-700 text-yellow-700 font-bold" onClick={openTradeModal}>Propose Trade Offer</Button>
            </div>
            <div className="flex gap-2 text-sm text-green-900 mb-2">
              <span>Expiry: {selectedProduct.expiry}</span>
              <span>|</span>
              <span>{selectedProduct.viewers} viewing</span>
            </div>
            <div className="text-xs text-muted-foreground mb-2">Auction ends: {new Date(selectedProduct.auctionEnds).toLocaleString()}</div>
          </div>
        </div>
      )}

      {/* Persistent Chat Widget */}
      <div>
        <button
          className="fixed bottom-6 right-6 z-50 bg-green-700 text-white rounded-full shadow-lg p-4 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Open chat"
          onClick={() => setShowChat(true)}
          style={{ display: showChat ? 'none' : 'block' }}
        >
          <MessageCircle className="h-7 w-7" />
        </button>
        {showChat && (
          <div className="fixed bottom-6 right-6 z-50 w-80 max-w-full bg-white rounded-xl shadow-2xl border border-green-200 flex flex-col animate-fade-in">
            <div className="flex items-center justify-between px-4 py-3 border-b border-green-100 bg-green-50 rounded-t-xl">
              <span className="font-bold text-green-900">Marketplace Chat</span>
              <button onClick={() => setShowChat(false)} aria-label="Close chat" className="text-green-900 hover:text-red-600"><X className="h-5 w-5" /></button>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border-b border-green-100 bg-green-50">
              <span className="text-green-900 font-semibold text-sm">Chat with:</span>
              <select
                className="border border-green-300 rounded px-2 py-1 text-green-900 bg-white text-sm"
                value={chatUser.username}
                onChange={e => setChatUser(dummyUsers.find(u => u.username === e.target.value))}
                aria-label="Select chat user"
              >
                {dummyUsers.map(u => (
                  <option key={u.id} value={u.username}>{u.display}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 overflow-y-auto p-3" style={{ minHeight: 180, maxHeight: 240 }}>
              {chatHistory.length === 0 ? (
                <div className="text-green-700 text-sm">No messages yet. Start the conversation!</div>
              ) : (
                chatHistory.map((m, idx) => (
                  <div key={idx} className={"mb-2 " + (m.from === "you" ? "text-right" : "text-left") }>
                    <span className={m.from === "you" ? "text-green-900 font-bold" : "text-green-700 font-semibold"}>{m.from}: </span>
                    <span className="text-green-900">{m.text}</span>
                    <span className="text-xs text-muted-foreground ml-2">{m.time}</span>
                  </div>
                ))
              )}
            </div>
            <form onSubmit={handleSendChat} className="flex gap-2 p-3 border-t border-green-100 bg-green-50 rounded-b-xl">
              <Input
                type="text"
                placeholder="Type your message..."
                value={chatMessage}
                onChange={e => setChatMessage(e.target.value)}
                className="flex-1 border-green-300"
                aria-label="Chat message"
                autoFocus
              />
              <Button type="submit" className="bg-green-700 text-white font-bold px-4 py-2 rounded-lg">Send</Button>
            </form>
          </div>
        )}
      </div>

      {/* Contact Seller Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <form className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in" onSubmit={handleSendMessage}>
            <button className="absolute top-4 right-4 text-green-900 hover:text-red-600" onClick={closeMessageModal} aria-label="Close message modal" type="button"><X className="h-6 w-6" /></button>
            <h3 className="text-xl font-bold text-green-900 mb-2">Contact Seller</h3>
            <textarea ref={messageInputRef} className="w-full border border-green-300 rounded p-2 mb-4" rows={4} placeholder="Type your message..." value={messageText} onChange={e => setMessageText(e.target.value)} required aria-label="Message to seller" />
            <Button type="submit" size="lg" className="bg-primary text-white font-bold w-full">Send Message</Button>
          </form>
        </div>
      )}

      {/* Propose Trade Offer Modal */}
      {showTradeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <form className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in" onSubmit={handleSendTrade}>
            <button className="absolute top-4 right-4 text-green-900 hover:text-red-600" onClick={closeTradeModal} aria-label="Close trade modal" type="button"><X className="h-6 w-6" /></button>
            <h3 className="text-xl font-bold text-green-900 mb-2">Propose Trade Offer</h3>
            <textarea ref={tradeInputRef} className="w-full border border-yellow-300 rounded p-2 mb-4" rows={4} placeholder="Describe your trade offer (e.g. barter, inventory item, etc.)" value={tradeText} onChange={e => setTradeText(e.target.value)} required aria-label="Trade offer details" />
            <Button type="submit" size="lg" className="bg-yellow-700 text-white font-bold w-full">Send Trade Offer</Button>
          </form>
        </div>
      )}

      {/* Inventory Transfer Modal */}
      {showTransferModal && transferItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <form className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in" onSubmit={handleTransfer}>
            <button className="absolute top-4 right-4 text-green-900 hover:text-red-600" onClick={closeTransferModal} aria-label="Close transfer modal" type="button"><X className="h-6 w-6" /></button>
            <h3 className="text-xl font-bold text-green-900 mb-2">Transfer Inventory</h3>
            <div className="mb-2">Item: <span className="font-semibold">{transferItem.name}</span></div>
            <div className="mb-2">Available: <span className="font-semibold">{transferItem.qty} {transferItem.unit}</span></div>
            <div className="mb-2">
              <label className="text-green-900 font-semibold mr-2">To:</label>
              <select className="border border-green-300 rounded px-2 py-1 text-green-900 bg-white text-sm" value={transferTo} onChange={e => setTransferTo(e.target.value)} required>
                {dummyUsers.filter(u => u.username !== chatUser.username).map(u => (
                  <option key={u.id} value={u.username}>{u.display}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="text-green-900 font-semibold mr-2">Amount:</label>
              <input type="number" min="1" max={transferItem.qty} value={transferAmount} onChange={e => setTransferAmount(e.target.value)} className="border border-green-300 rounded px-2 py-1 text-sm w-24" required />
            </div>
            <Button type="submit" size="lg" className="bg-yellow-700 text-white font-bold w-full">Transfer</Button>
          </form>
        </div>
      )}

      {/* Buyers Also Like Section */}
      <section className="py-10 bg-white/80 border-t border-green-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Buyers Also Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyersAlsoLike.map(product => (
              <Card key={product.id} className="bg-white shadow-card hover:shadow-lg transition-all duration-300 border border-green-100 cursor-pointer" onClick={() => openDetail(product)}>
                <CardHeader>
                  <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                  <CardTitle className="text-lg font-bold text-green-900 mb-1">{product.name}</CardTitle>
                  <CardDescription className="text-green-800 mb-1">{product.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Auctions Section */}
      <section className="py-10 bg-gradient-to-r from-yellow-50 via-green-50 to-green-100 border-t border-green-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Trending Auctions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingAuctions.map(product => (
              <Card key={product.id} className="bg-white shadow-card hover:shadow-lg transition-all duration-300 border border-green-100 cursor-pointer" onClick={() => openDetail(product)}>
                <CardHeader>
                  <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                  <CardTitle className="text-lg font-bold text-green-900 mb-1">{product.name}</CardTitle>
                  <CardDescription className="text-green-800 mb-1">{product.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Viewed Section */}
      <section className="py-10 bg-white/80 border-t border-green-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Recently Viewed</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyViewed.map(product => (
              <Card key={product.id} className="bg-white shadow-card hover:shadow-lg transition-all duration-300 border border-green-100 cursor-pointer" onClick={() => openDetail(product)}>
                <CardHeader>
                  <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                  <CardTitle className="text-lg font-bold text-green-900 mb-1">{product.name}</CardTitle>
                  <CardDescription className="text-green-800 mb-1">{product.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage; 