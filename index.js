// items
const menu = [
    {
        id: 1,
        title: "Calabresa",
        category: "tradicional",
        price: 30,
        img: "https://nextfoodcare.com.br/wp-content/uploads/2021/06/PIZZA-CALABRESA.png",
        descr: `300 g de linguiça calabresa defumada, Sem casca e em rodelas finas, 2 cebolas em rodelas finas, 1/2 xícara de chá azeitona preta sem caroço, 1 colher de sopa de azeite de oliva, 1 colher de café de orégano`,
    },
    {
        id: 2,
        title: "Mussarela",
        category: "tradicional",
        price: 28,
        img: "https://lupertine.com.br/wp-content/uploads/2022/05/mussarela-tomate-3.jpg",
        descr: `250 g de mussarela ralada grossa, 2 tomates fatiados, azeitona picada, orégano a gosto`,
    },
    {
        id: 3,
        title: "Portuguesa",
        category: "tradicional",
        price: 31,
        img: "http://www.redelevepizza.com.br/assets/imagens/pizzas/049/portuguesa.jpg",
        descr: `1/2 Kg de farinha, 1 copo americano de água morna, 30 g de fermento fresco, 1/2 xícara de óleo, 1 colher de sal, 1 colher de café de açúcar, 150 g de queijo, 50 g de presunto, 1 tomate em rodelas, 1/2 pimentão fatiado (como quiser), 1 ovo cozido, 1 cebola picada, Molho de tomate Azeitonas para decorar, orégano e tempero verde a gosto`,
    },
    {
        id: 4,
        title: "Baiana",
        category: "tradicional",
        price: 31,
        img: "https://www.molecaggio.com.br/wp-content/uploads/2020/01/pizza_baiana.png",
        descr: `Mussarela, molho de tomates Molecaggio, calabresa fatiada, ovos cozidos, cebola, azeitonas pretas e orégano. Tudo isso coberto com pimenta seca para dar o aquele toque baiano.`,
    },
    {
        id: 5,
        title: "mista",
        category: "tradicional",
        price: 28,
        img: "http://www.redelevepizza.com.br/assets/imagens/pizzas/034/mista.jpg",
        descr: `mussarela, presunto e calabresa`,
    },
    {
        id: 6,
        title: "Carne do sol",
        category: "tradicional",
        price: 33,
        img: "https://riomarrecife.com.br/recife/2019/05/image-2.png",
        descr: `molho de tomate, mussarela, carne de sol desfiada, catupiry, azeite e orégano`,
    },
    {
        id: 7,
        title: "Frango c/ catupiry",
        category: "tradicional",
        price: 30,
        img: "https://img.itdg.com.br/tdg/images/blog/uploads/2018/04/pizza-de-frango-com-catupiri-receita.jpg?w=1200",
        descr: `400g de peito de frango Seara DaGranja
        Água
        4 colheres de orégano
        400g de queijo catupiry
        1 xícara de chá de molho de tomate
        Sal, pimenta e salsinha a gosto`,
    },
    {
        id: 8,
        title: "marguerita",
        category: "tradicional",
        price: 28,
        img: "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2020/08/pizza-margherita.jpg?x41527",
        descr: `1 (copo) de molho de tomate pronto
        400 g de mussarela, peça inteira
        5 tomates
        Manjericão a gosto
        Azeite o quanto baste`,
    },
    {
        id: 9,
        title: "Búfala",
        category: "Gourmet",
        price: 40,
        img: "https://www.rbsdirect.com.br/imagesrc/16695777.jpg?w=700",
        descr: `500 g de muçarela ralada
        200 g de muçarela de búfala cortada em rodelas
        16 tomates-cereja cortados ao meio (200 g)
        folhas de 1 maço de rúcula`,
    },
    {
        id: 10,
        title: "Francesa",
        category: "Gourmet",
        price: 40,
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0f/07/38/16/pizza-francesa-presunto.jpg",
        descr: `400g de tomates sem pele e sem sementes
        1 cebola picada
        2 dentes de alho picados
        1 colher (sopa) de alcaparras picadas
        3 colheres (sopa) de polpa de tomates
        1 pitada de açúcar
        Aliche em conserva
        Azeitonas
        Orégano fresco
        Azeite extravirgem
        Sal e pimenta-do-reino a gosto`,
    },
    {
        id: 11,
        title: "Caprise",
        category: "Gourmet",
        price: 40,
        img: "http://conteudo.imguol.com.br/c/entretenimento/33/2020/07/09/pizza-caprese-1594306682855_v2_768x509.jpg",
        descr: `150 gr de mussarela especial em fatias


        8 fatias de tomate
        
        
        8 folhas de manjericão gigante
        
        
        8 fatias de mussarela de búfala`,
    },
    {
        id: 12,
        title: "Di parma",
        category: "Gourmet",
        price: 40,
        img: "https://thumbs.dreamstime.com/b/leckere-pizza-mit-prosciuttodiparma-arugula-und-parmesank%C3%A4se-auf-einem-wei%C3%9Fen-hintergrund-italienische-traditionelle-k%C3%BCche-178450009.jpg",
        descr: `150 gr de mussarela especial em fatias


        8 fatias de tomate
        
        
        8 folhas de manjericão gigante
        
        
        8 fatias de mussarela de búfala`,
    },
    {
        id: 13,
        title: "Pime fit",
        category: "Gourmet",
        price: 40,
        img: "https://media-cdn.tripadvisor.com/media/photo-s/12/42/65/0f/deliciosa-prime-fit-pro.jpg",
        descr: `Lorem  explicabo quis laudantium optio?`,
    },
    {
        id: 14,
        title: "Brigadeiro",
        category: "Doce",
        price: 35,
        img: "https://www.mavalerio.com.br/wp-content/uploads/2018/12/160722_pizzas-002-v2-500x340.png",
        descr: `Lorem ipsum dolor sit amet consecteturadipisicing elit. Provident aspernatur nobis voluptatem aliquam, consequuntur ex voluptas laboriosam quibusdam dolorem magni corruptiasperiores, placeat eligendi repellat odio explicabo quis laudantium optio?`,
    },
    {
        id: 15,
        title: "Goiabada c/ creme cheese",
        category: "Doce",
        price: 35,
        img: "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2022/05/pizza-romeu-e-julieta-1024x576.jpg?x41527",
        descr: `Lorem ipsum it. Provident aspernatur nobis voluptatem aliquam, consequuntur ex voluptas laboriosam quibusdam dolorem magni corruptiasperiores, placeat eligendi repellat odio explicabo quis laudantium optio?`,
    },
    {
        id: 16,
        title: "Romeo e Julieta",
        category: "Doce",
        price: 35,
        img: "https://www.pizzatec.com.br/assets/uploads/images/2018/12/pizza-romeu-e-julieta.jpg",
        descr: `Lorem ipsum dolor sitem aliquam, consequuntur ex voluptas laboriosam quibusdam dolorem magni corruptiasperiores, placeat eligendi repellat odio explicabo quis laudantium optio?`,
    },
    {
        id: 17,
        title: "Banana c/ canela",
        category: "Doce",
        price: 35,
        img: "https://s2.glbimg.com/gwhIG-mUpHKhYSg8Zl21Zj_OXjA=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/M/q/GHOy3ZT9GjPxMJH7FYmw/pizza-doce-banana-receita.jpg",
        descr: `consect optio?m dolsicing elit`,
    },
    {
        id: 18,
        title: "Peperone",
        category: "Especial",
        price: 35,
        img: "https://pizzariadesucesso.com/wp-content/uploads/2018/05/pepperoni-pizza.jpg",
        descr: `Lorem ipsum dolsicing elit. Provident asperoluptatuam, consequuntur ex voluptas laboriosam quibusdam dolorem magni corruptiasperiores, placeat elo?`,
    },
    {
        id: 19,
        title: "Receita do chef",
        category: "Especial",
        price: 35,
        img: "https://media-cdn.tripadvisor.com/media/photo-s/06/33/3c/a9/pizza-da-casa.jpg",
        descr: `Lorem ipsum dolor sit amet consecteturadipisicing elit. Provident aspernatur nobis voluptatem aliquam, consequuntur ex voluptas laboriosam quibusdam dolorem magni corruptiasperiores, placeat eligendi repellat odio explicabo quis laudantium optio?`,
    },
    {
        id: 20,
        title: "4 sabores",
        category: "Especial",
        price: 45,
        img: "https://static.wixstatic.com/media/73f848_ce02320366594129ac363de3b4a41a96~mv2.png/v1/crop/x_44,y_0,w_806,h_595/fill/w_594,h_462,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Her%C3%B3is%20da%20Pizza.png",
        descr: `Lorem ipsum dolor sit amet consecteturadipisicing elit. Provident aspernatur nobis voluptatem aliquam, consequuntur ex voluptas laboriosam quibusdam dolorem magni corruptiasperiores, placeat eligendi repellat odio explicabo quis laudantium optio?`,
    }
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// carregamento dos items
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu)
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    },['todos']);
    const categoryBtn = categories.map(function(category){
        return `<button class="filter-btn" type="button" 
        data-id=${category}>${category}</button>`
    }).join("")
    container.innerHTML = categoryBtn;
    const filterBtn = document.querySelectorAll('.filter-btn');
    // filtro dos items
    filterBtn.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const category = e.currentTarget.dataset.id
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    return menuItem;
                }
            });
            if(category === "todos"){
                displayMenuItems(menu);
            }else {
                displayMenuItems(menuCategory);
            }
        });
    });
});

// btn abrir modal
function modalBtn(){
    var modal = document.querySelector(".creation-invisible");

    modal.classList.toggle("creation-visible");
    modal.classList.toggle("creation-invisible");
};
function closeModal(){
    var modal = document.querySelector(".creation-visible");

    modal.classList.toggle("creation-visible");
    modal.classList.toggle("creation-invisible");
};

// formulario de adição
function addPizza(){
    // form informaçoes
    var inputPrice = document.querySelector("#item-price[name='item-price']").value;
    var inputCateg = document.querySelector("#item-categoy[name='item-categoy']").value;
    var inputTitle = document.querySelector("#item-title[name='item-title']").value;
    var inputImg = document.querySelector("#item-img[name='item-img']").value;
    var inputDescr = document.querySelector("#item-decr[name='item-decr']").value;

    var newPizza = ({id: 1,
        title: inputTitle,
        category: inputCateg,
        price: inputPrice,
        img: inputImg,
        descr: inputDescr});
        
    verificationToAdd()

    menu.push(newPizza)
};

function verificationToAdd(){
    alert('confirmação de adição \nOBS:para ver nova adiçao procure no tipo ex:tradicional');
    closeModal();
};


//  display dos items
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
        return `<article class="menu-item">
                    <img src=${item.img} alt=${item.title} class="photo">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">R$ ${item.price}</h4>
                        </header>
                        <p class="item-text">
                            ${item.descr}
                        </p>
                    </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
};