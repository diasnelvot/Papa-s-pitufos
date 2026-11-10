// BANCO DE DADOS DE PRATOS E DRINKS
const MENU = [
    { id: 1, title: "Tornedor Wagyu A5 ao Poivre Nobre", cat: "eats", tag: "Especialidade do Chef", price: 185.00, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80", desc: "Corte nobre de Wagyu A5 selado na crosta de pimentas selecionadas, demiglace ao cognac e mousseline leve de batata trufada." },
    { id: 2, title: "Canapés de Caviar Beluga & Blinis", cat: "eats", tag: "Exclusivo", price: 210.00, img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80", desc: "Caviar Beluga sobre blinis aquecidos, creme de fraîche refinado, ciboulette picada e lascas de lâmina de ouro 24k." },
    { id: 3, title: "Bisque de Lagosta com Açafrão Real", cat: "eats", tag: "Culinária Francesa", price: 145.00, img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80", desc: "Sopa aveludada de lagosta grelhada com estigmas de açafrão do Irã, finalizada com emulsão de ervas finas e crostini de sourdough." },
    { id: 4, title: "Risoto de Cavaquinha & Trufas Negras", cat: "eats", tag: "Autoral", price: 165.00, img: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80", desc: "Arroz arbóreo italiano com medalhões de cavaquinha, manteiga noisette e lâminas fressas de trufa negra de Alba." },
    { id: 5, title: "Ceviche de Robalo em Leite de Tigre Azul", cat: "eats", tag: "Mixologia Gastronômica", price: 88.00, img: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=600&q=80", desc: "Robalo selvagem marinado em infusão cítrica natural de flor de fada, abacate macerado, milho crocante e pimenta rosa." },
    { id: 6, title: "Tapas de Cogumelos Eringui Trufados", cat: "eats", tag: "Vegetariano Gourmet", price: 72.00, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80", desc: "Cogumelos silvestres e eringui grelhados no azeite extravirgem trufado, servidos sobre broa artesanal tostada ao alho confit." },
    { id: 7, title: "Carpaccio de Polvo ao Molho Cítrico", cat: "eats", tag: "Frutos do Mar", price: 95.00, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80", desc: "Lâminas ultrafinas de polvo grelhado, alcaparras crocantes, flor de sal e azeite verde de manjericão." },
    { id: 8, title: "Elixir Safira Dourado Pitufos", cat: "drinks", tag: "Assinatura da Casa", price: 58.00, img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80", desc: "Gin botânico safira, água tônica artesanal de flor de sabugueiro, licor de mirtilo e brilho comestível mineral." },
    { id: 9, title: "Smoked Bourbon Old Fashioned", cat: "drinks", tag: "Defumado na Mesa", price: 65.00, img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80", desc: "Bourbon maturado em carvalho, bitters aromáticos de especiarias e névoa defumada de madeira de macieira sob campânula." },
    { id: 10, title: "Smurfberry Royale Molecular", cat: "drinks", tag: "Molecular", price: 52.00, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80", desc: "Vodka premium com infusão artesanal de amora silvestre, licor de cassis e esfera molecular expansiva de limão siciliano." },
    { id: 11, title: "Coquetel Lumina Botânico 24k", cat: "drinks", tag: "Premium", price: 68.00, img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80", desc: "Tequila reposado, licor St. Germain, tônica artesanal e flocos flutuantes de ouro puro comestível." },
    { id: 12, title: "Infusão Mística de Ervas (Zero Álcool)", cat: "drinks", tag: "Mocktail", price: 38.00, img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80", desc: "Néctar de tangerina fresca, chá de borboleta azul, xarope caseiro de gengibre e espuma suave de capim-santo." },
    { id: 13, title: "Esfera Belgacom & Gelato de Baunilha Bourbon", cat: "desserts", tag: "Sobremesa Assinada", price: 55.00, img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=600&q=80", desc: "Esfera de chocolate belga 70% recheada com gelato artesanal de baunilha Bourbon, servida com calda quente de avelã." },
    { id: 14, title: "Soufflé Quente de Pistache Siciliano", cat: "desserts", tag: "Culinária Doce", price: 52.00, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80", desc: "Soufflé aerado de pistache de Bronte, acompanhado de sorbet de limão e crocante de praliné." },
    { id: 15, title: "Velvet Azul Papa's Haute", cat: "desserts", tag: "Exclusivo", price: 46.00, img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80", desc: "Bolo aveludado de amêndoas com creme levemente cítrico de mascarpone e merengue italiano maçaricado." },
    { id: 16, title: "Mille-Feuille de Baunilha & Macadâmia", cat: "desserts", tag: "Clássico", price: 44.00, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80", desc: "Massa folhada caramelizada em camadas com mousseline de baunilha de Madagascar e macadâmias crocantes." }
];

const MAX_RESERVATIONS_PER_DAY = 9;
const ADMIN_PASS = "1234";

// GESTÃO DE ESTADO LOCAL
function getStoredData(key, fallback) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
}
function setStoredData(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

let cart = getStoredData('papas_cart', []);
let ordersHistory = getStoredData('papas_orders', []);
let dailyReservations = getStoredData('papas_reservations', {});
let isAdminAuthenticated = getStoredData('papas_admin_auth', false);
let selectedItem = null;

window.addEventListener('DOMContentLoaded', () => {
    initSampleReservations();
    updateCartUI();
    
    // Renderizações específicas de página
    if (document.getElementById('home-featured-grid')) renderFeaturedHome();
    if (document.getElementById('menu-grid')) { renderTabs(); renderMenu(); }
    if (document.getElementById('calendar-grid-container')) renderVIPCalendar();
});

function initSampleReservations() {
    if (Object.keys(dailyReservations).length === 0) {
        const today = new Date();
        const formatStr = (d) => d.toISOString().split('T')[0];
        const d1 = new Date(today); d1.setDate(today.getDate() + 1);
        const d2 = new Date(today); d2.setDate(today.getDate() + 2);
        
        dailyReservations[formatStr(today)] = 2;
        dailyReservations[formatStr(d1)] = 6;
        dailyReservations[formatStr(d2)] = 9;
        setStoredData('papas_reservations', dailyReservations);
    }
}

// CARRINHO DE COMPRAS
function addToCartDirect(id) {
    const item = MENU.find(i => i.id === id);
    if (!item) return;
    const existing = cart.find(c => c.id === item.id);
    if (existing) { existing.qty += 1; } else { cart.push({ ...item, qty: 1 }); }
    setStoredData('papas_cart', cart);
    updateCartUI();
    showToast(`"${item.title}" adicionado ao pedido!`);
}

function changeCartQty(id, delta) {
    const idx = cart.findIndex(i => i.id === id);
    if (idx !== -1) {
        cart[idx].qty += delta;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
        setStoredData('papas_cart', cart);
        updateCartUI();
    }
}

function updateCartUI() {
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    const totalPrice = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    
    const badge = document.getElementById('cart-badge-count');
    const totalVal = document.getElementById('cart-total-val');
    const container = document.getElementById('cart-items');

    if (badge) badge.innerText = totalQty;
    if (totalVal) totalVal.innerText = `R$ ${totalPrice.toFixed(2)}`;

    if (container) {
        if (cart.length === 0) {
            container.innerHTML = `
                <div class="text-center py-12 space-y-2 text-gray-400">
                    <i class="fa-solid fa-wine-glass text-2xl text-sapphire-400"></i>
                    <p class="text-xs font-semibold">Seu pedido VIP está vazio.</p>
                </div>`;
        } else {
            container.innerHTML = cart.map(item => `
                <div class="flex items-center justify-between p-3 rounded-xl bg-royalDark-950 border border-sapphire-500/20 text-xs text-white">
                    <div class="space-y-0.5 max-w-[160px]">
                        <p class="font-bold truncate">${item.title}</p>
                        <p class="text-goldAccent-400 font-bold text-[11px]">R$ ${(item.price * item.qty).toFixed(2)}</p>
                    </div>
                    <div class="flex items-center gap-2 bg-royalDark-900 px-2 py-1 rounded-lg border border-sapphire-500/30">
                        <button onclick="changeCartQty(${item.id}, -1)" class="text-gray-400 hover:text-white px-1 font-bold">-</button>
                        <span class="text-xs font-bold text-goldAccent-400 w-4 text-center">${item.qty}</span>
                        <button onclick="changeCartQty(${item.id}, 1)" class="text-gray-400 hover:text-white px-1 font-bold">+</button>
                    </div>
                </div>
            `).join('');
        }
    }
}

function toggleCartModal() {
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) sidebar.classList.toggle('hidden');
}

function clearCart() {
    if (cart.length === 0) {
        showToast("Seu pedido está vazio.");
        return;
    }
    const totalOrder = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const newOrder = {
        id: `#PF-${Math.floor(1000 + Math.random() * 9000)}`,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        items: [...cart],
        total: totalOrder
    };

    ordersHistory.unshift(newOrder);
    setStoredData('papas_orders', ordersHistory);
    cart = [];
    setStoredData('papas_cart', cart);
    updateCartUI();
    toggleCartModal();
    showToast("Pedido confirmado e enviado à cozinha!");
}

// PAINEL VIP DE GESTÃO (COM SENHA & DASHBOARD)
function requestAdminAccess() {
    if (isAdminAuthenticated) {
        toggleAdminPanel();
    } else {
        const input = document.getElementById('admin-pass-input');
        if (input) input.value = '';
        const passModal = document.getElementById('password-modal');
        if (passModal) passModal.classList.remove('hidden');
    }
}

function verifyAdminPassword(e) {
    e.preventDefault();
    const pass = document.getElementById('admin-pass-input').value;
    if (pass === ADMIN_PASS || pass.toLowerCase() === 'smurf') {
        isAdminAuthenticated = true;
        setStoredData('papas_admin_auth', true);
        closeModal('password-modal');
        toggleAdminPanel();
        showToast("Acesso administrativo liberado!");
    } else {
        showToast("Senha incorreta! Dica: 1234");
    }
}

function lockAdminPanel() {
    isAdminAuthenticated = false;
    setStoredData('papas_admin_auth', false);
    const panel = document.getElementById('admin-panel');
    if (panel) panel.classList.add('hidden');
    showToast("Painel bloqueado.");
}

function toggleAdminPanel() {
    const panel = document.getElementById('admin-panel');
    if (!panel) return;
    panel.classList.toggle('hidden');
    
    if (!panel.classList.contains('hidden')) {
        const totalSales = ordersHistory.reduce((s, o) => s + o.total, 0);
        document.getElementById('admin-sales').innerText = `R$ ${totalSales.toFixed(2)}`;
        document.getElementById('admin-count').innerText = ordersHistory.length;

        const itemCounts = {};
        ordersHistory.forEach(order => {
            order.items.forEach(i => {
                itemCounts[i.title] = (itemCounts[i.title] || 0) + i.qty;
            });
        });

        const entries = Object.entries(itemCounts);
        if (entries.length > 0) {
            entries.sort((a, b) => b[1] - a[1]);
            document.getElementById('admin-most-popular').innerText = `${entries[0][0]} (${entries[0][1]}x)`;
            document.getElementById('admin-least-popular').innerText = `${entries[entries.length - 1][0]} (${entries[entries.length - 1][1]}x)`;
        } else {
            document.getElementById('admin-most-popular').innerText = "Nenhum ainda";
            document.getElementById('admin-least-popular').innerText = "Nenhum ainda";
        }

        const ordersContainer = document.getElementById('admin-orders-list');
        if (ordersHistory.length === 0) {
            ordersContainer.innerHTML = `<p class="text-xs text-gray-400 text-center py-6">Nenhum pedido efetuado nesta sessão ainda.</p>`;
        } else {
            ordersContainer.innerHTML = ordersHistory.map(o => `
                <div class="p-3 rounded-2xl bg-royalDark-950 border border-sapphire-500/20 text-xs text-white space-y-2">
                    <div class="flex justify-between items-center font-bold border-b border-royalDark-800 pb-2">
                        <span class="text-goldAccent-400">${o.id} • <span class="text-gray-400 font-normal">${o.time}</span></span>
                        <span class="text-emerald-400 font-extrabold">R$ ${o.total.toFixed(2)}</span>
                    </div>
                    <div class="space-y-1">
                        ${o.items.map(i => `
                            <div class="flex justify-between text-[11px] text-gray-300">
                                <span><strong>${i.qty}x</strong> ${i.title}</span>
                                <span class="text-gray-400">R$ ${(i.price * i.qty).toFixed(2)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
    }
}

// CALENDÁRIO & RESERVAS
function renderVIPCalendar() {
    const container = document.getElementById('calendar-grid-container');
    if (!container) return;
    container.innerHTML = '';
    const today = new Date();

    for (let i = 0; i < 7; i++) {
        const dateObj = new Date(today);
        dateObj.setDate(today.getDate() + i);
        const dateStr = dateObj.toISOString().split('T')[0];
        const dayName = dateObj.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '');
        const dayNum = dateObj.getDate();
        const monthName = dateObj.toLocaleDateString('pt-BR', { month: 'short' });

        const count = dailyReservations[dateStr] || 0;
        const isFull = count >= MAX_RESERVATIONS_PER_DAY;
        let statusBadge = '', borderStyle = '';

        if (isFull) {
            statusBadge = `<span class="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-bold border border-red-500/40">LOTADO (${count}/9)</span>`;
            borderStyle = 'border-red-500/40 bg-red-950/20 opacity-80';
        } else if (count >= 4) {
            statusBadge = `<span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px] font-bold border border-amber-500/40">${count}/9 Vagas</span>`;
            borderStyle = 'border-amber-500/40 bg-amber-950/20';
        } else {
            statusBadge = `<span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/40">${count}/9 Vagas</span>`;
            borderStyle = 'border-emerald-500/40 bg-emerald-950/20';
        }

        container.innerHTML += `
            <div class="glass-card p-3 rounded-2xl border text-center space-y-2 flex flex-col justify-between items-center transition-all ${borderStyle}">
                <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400">${dayName}</span>
                <div>
                    <span class="text-lg font-serif font-extrabold text-white block">${dayNum}</span>
                    <span class="text-[10px] uppercase text-gray-400 font-semibold">${monthName}</span>
                </div>
                ${statusBadge}
                <button ${isFull ? 'disabled' : ''} onclick="selectCalendarDate('${dateStr}')" class="w-full mt-1 py-1.5 rounded-xl text-[11px] font-bold transition-all ${isFull ? 'bg-royalDark-900 text-gray-600 cursor-not-allowed border border-gray-800' : 'bg-sapphire-600 text-white hover:bg-sapphire-500 border border-goldAccent-500/40'}">
                    ${isFull ? 'Esgotado' : 'Reservar'}
                </button>
            </div>
        `;
    }
}

function selectCalendarDate(dateStr) {
    const input = document.getElementById('reservation-date-input');
    if (input) {
        input.value = dateStr;
        document.getElementById('reservation-form-container').scrollIntoView({ behavior: 'smooth' });
        showToast(`Data ${dateStr} selecionada.`);
    }
}

function handleReservationSubmit(e) {
    e.preventDefault();
    const dateInput = document.getElementById('reservation-date-input');
    const selectedDate = dateInput ? dateInput.value : '';

    if (selectedDate) {
        const currentCount = dailyReservations[selectedDate] || 0;
        if (currentCount >= MAX_RESERVATIONS_PER_DAY) {
            showToast("Dia lotado! Limite de 9 reservas por dia.");
            return;
        }
        dailyReservations[selectedDate] = currentCount + 1;
        setStoredData('papas_reservations', dailyReservations);
        renderVIPCalendar();
    }
    showToast("Solicitação de reserva VIP enviada com sucesso!");
    e.target.reset();
}

// RENDERS DO CARDÁPIO & HOME
let activeCat = "all";
function renderTabs() {
    const tabs = [
        { id: "all", name: "Cardápio Completo" },
        { id: "eats", name: "Gastronomia & Entradas" },
        { id: "drinks", name: "Mixologia & Elixires" },
        { id: "desserts", name: "Sobremesas Haute" }
    ];
    document.getElementById('category-tabs').innerHTML = tabs.map(c => `
        <button onclick="setCat('${c.id}')" class="px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${activeCat === c.id ? 'bg-sapphire-600 text-white font-bold border border-goldAccent-500/40' : 'bg-royalDark-950/80 text-gray-300 hover:bg-royalDark-800'}">
            ${c.name}
        </button>
    `).join('');
}

function setCat(id) { activeCat = id; renderTabs(); renderMenu(); }

function renderFeaturedHome() {
    const featured = [MENU[0], MENU[1], MENU[3], MENU[7], MENU[8], MENU[12]];
    document.getElementById('home-featured-grid').innerHTML = featured.map(i => `
        <div class="glass-card rounded-2xl p-4 space-y-3 flex flex-col justify-between border border-sapphire-500/20">
            <div class="relative overflow-hidden rounded-xl h-48">
                <img src="${i.img}" class="w-full h-full object-cover">
                <span class="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-royalDark-950/80 text-[9px] font-bold text-goldAccent-400 border border-goldAccent-500/30 uppercase">${i.tag}</span>
            </div>
            <div>
                <h4 class="font-serif font-bold text-white text-base">${i.title}</h4>
                <p class="text-xs text-gray-300 font-light line-clamp-2">${i.desc}</p>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-royalDark-800">
                <span class="font-bold text-goldAccent-400 text-sm">R$ ${i.price.toFixed(2)}</span>
                <button onclick="addToCartDirect(${i.id})" class="px-3 py-1.5 rounded-full bg-sapphire-600 text-white text-xs font-bold hover:bg-sapphire-500">+ Pedir</button>
            </div>
        </div>
    `).join('');
}

function renderMenu() {
    const search = (document.getElementById('search-input')?.value || '').toLowerCase();
    const sort = document.getElementById('sort-select')?.value || 'popular';

    let items = MENU.filter(i => (activeCat === 'all' || i.cat === activeCat) && (i.title.toLowerCase().includes(search) || i.desc.toLowerCase().includes(search)));
    if (sort === 'price-asc') items.sort((a,b) => a.price - b.price);
    if (sort === 'price-desc') items.sort((a,b) => b.price - a.price);

    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    grid.innerHTML = items.map(i => `
        <div class="glass-card rounded-2xl p-4 space-y-3 flex flex-col justify-between border border-sapphire-500/20">
            <div class="relative overflow-hidden rounded-xl h-48">
                <img src="${i.img}" class="w-full h-full object-cover">
                <span class="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-royalDark-950/80 text-[9px] font-bold text-goldAccent-400 border border-goldAccent-500/30 uppercase">${i.tag}</span>
            </div>
            <div>
                <h4 class="font-serif font-bold text-white text-base">${i.title}</h4>
                <p class="text-xs text-gray-300 font-light line-clamp-2">${i.desc}</p>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-royalDark-800">
                <span class="font-bold text-goldAccent-400 text-base">R$ ${i.price.toFixed(2)}</span>
                <div class="flex items-center gap-2">
                    <button onclick="addToCartDirect(${i.id})" class="px-3 py-1.5 rounded-full bg-sapphire-600 border border-goldAccent-500/30 text-white text-xs font-bold hover:bg-sapphire-500">Pedir</button>
                    <button onclick="openModal(${i.id})" class="p-2 rounded-full bg-royalDark-950 text-gray-300 hover:bg-royalDark-800"><i class="fa-solid fa-eye text-xs"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

function openModal(id) {
    selectedItem = MENU.find(i => i.id === id);
    if (!selectedItem) return;
    document.getElementById('modal-tag').innerText = selectedItem.tag;
    document.getElementById('modal-title').innerText = selectedItem.title;
    document.getElementById('modal-img').src = selectedItem.img;
    document.getElementById('modal-desc').innerText = selectedItem.desc;
    document.getElementById('modal-price').innerText = `R$ ${selectedItem.price.toFixed(2)}`;
    document.getElementById('item-modal').classList.remove('hidden');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('hidden');
}

function addModalItemToCart() {
    if (selectedItem) { addToCartDirect(selectedItem.id); closeModal('item-modal'); }
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3500);
}
