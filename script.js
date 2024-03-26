const onsens = [{
    "name":"Kusatsu",
    "location":"Kusatsu, Gunma Prefecture",
    "minerals": "Sulfuric spring",
    "temperature": "95C/203F",
    "year": 1594,
    "img":"https://www.nta.co.jp/yado/onsen/onsen100/images/im_kusatsu.jpg",
    "effects":  "Skin, wounds, depression, blood pressure",
},

{
    "name":"Gero",
    "location":"Gero, Gifu Prefecture",
    "minerals": "Sodium-hydrogen carbonate spring",
    "temperature": "84C/183F",
    "year": 1265,
    "img":"https://www.nta.co.jp/yado/onsen/onsen100/images/im_gero.jpg",
    "effects": "Wounds, gastrointestinal issues, stress, blood pressure",
},

    {
        "name":"Dougo",
        "location":"Matsuyama, Ehime Prefecture",
        "minerals": "Alkaline Spring",
        "temperature": "55C/131F",
        "year": 1710,
        "img":"https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2017/11/dogo-onsen-bath.jpg",
        "effects":"Insomnia, depression, fatigue, limb pain, gastrointestinal disease, sensitivity to cold",
    },

    {
        "name":"Beppu",
        "location":"Beppu, Oita Prefecture",
        "minerals": "Alkaline Spring",
        "temperature": "50C/122F",
        "year": "Unknown",
        "img":"https://www.ana.co.jp/japan-travel-planner/area/kyushu/oita/0000012/img006.jpg",
        "effects": "Skin benefits, muscle pain, limb pain, rheumatism, back pain, wounds, stress relief, post illness recovery",
    },

    {
        "name":"Arima",
        "location":"Hyogo, Kobe Prefecture",
        "minerals": "Carbonic acid hydrogen carbonate spring",
        "temperature": "98C/208F",
        "year": "Around 600AD",
        "img":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/22138235.jpg?k=b3e24dfe31facbc68db287129c7a173b4e01b9d0aabab022145a43a7dcc96ee0&o=&hp=1",
        "effects": "Nerve pain, sensitivity to cold,  blood pressure, chronic gynecological illness",
    },

    {
        "name":"Noboribetsu",
        "location":"Noboribetsu, Hokkaido Prefecture",
        "minerals": "Sulfuric spring",
        "temperature": "90C/194F",
        "year": "Unknown",
        "img":"https://selected-ryokan.com/wp-content/uploads/2015/06/hotel-mahoroba_lo001lo002.jpg",
        "effects":"Rheumatism, Menopause, anemia, skin illness, menstrual illnessv",
    },

    {
        "name":"Ibusuki",
        "location":"Ibusuki, Kagoshima Prefecture",
        "minerals": "Sodium chloride spring",
        "temperature": "82C/180F",
        "year": 1793,
        "img":"https://images.ctfassets.net/c3jfdk52c306/ibusuki-onsen_01/3a120d0bea2887e70bd3f52e7b69404f/ibusuki-onsen_01.jpg?fit=fill&w=1100&h=750&fm=webp",
        "effects":"Wounds, Sensitivity to cold, depression, dry skin",
    },

    {
        "name":"Hakone",
        "location":"Hakone, Kanagawa Prefecture",
        "minerals": "Alkaline spring",
        "temperature": "80C/180F",
        "year": 738,
        "img":"https://i0.wp.com/kshouse.jp/articles/wp-content/uploads/2021/05/%E5%A4%A9%E5%B1%B1%E6%B9%AF%E6%B2%BB%E9%83%B7%EF%BC%88%E9%9C%B2%E5%A4%A9%EF%BC%89.jpg?fit=720%2C477&ssl=1",
        "effects":"Skin disease and Bactericidal effects",
    },

    {
        "name":"Kinosaki",
        "location":"Toyooka, Okayama Prefecture",
        "minerals": "Sodium chloride spring",
        "temperature": "83C/181F",
        "year": 629,
        "img":"https://photos.smugmug.com/Kyoto/Kinosaki-Onsen/i-kwmhs44/0/c371eccd/L/shutterstock_EDITORIAL_1265679217-L.jpg",
        "effects":"Wounds, dry skin, Muscle/limb pain, sensitivity to cold, gastrointestinal disease, disturbances of peripheral circulation, stress",
    },

    {
        "name":"Yufuin",
        "location":"Yufu, Oita Prefecture",
        "minerals": "Sodium chloride spring",
        "temperature": "98C/208F",
        "year": 1180,
        "img":"https://images.ctfassets.net/c3jfdk52c306/yufuin-onsen_01/4f5587af60e5bd703d8daa8a013d57c4/yufuin-onsen_01.jpg?fit=fill&w=1100&h=750&fm=webp",
        "effects":"Wounds, burns, chronic skin disease, chronic gynecological diseasem, limb pain, chronic gastrointestinal disease",
    },

    {
        "name":"Yumura",
        "location":"Sakaiminato, Tottori Prefecture",
        "minerals": "Sulfur spring",
        "temperature": "46/115F",
        "year": "Unknown",
        "img":"https://www.travelarrangejapan.com/wp-content/uploads/2018/10/DSC07431.jpg",
        "effects":"Nerve pain, muslce/limb pain, illness related to skin",
    },

    {
        "name":"Higashiyama",
        "location":"Aizuwakamatsu, Fukushima Prefecture",
        "minerals": "Sulfur spring",
        "temperature": "72C/161F",
        "year": 708,
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWyuF4J8y5mlb80EBeu-3dfMYYvP0ABoWGmJkuj-PNIsX-wzErdmetqDVySKh_k4r0axw&usqp=CAU",
        "effects":"Nerve pain, muslce/limb pain, illness related to skin",
    },

    {
        "name":"Yunokami",
        "location":"Aizuwakamatsu, Fukushima Prefecture",
        "minerals": "Alkaline spring",
        "temperature": "83C/181F",
        "year": 1889,
        "img":"https://fukushima.travel/img/spots/photos/thumbnail/BAJOwj9KULikzlp0ch3QhVWKcMofH3Uq0omvs9Aa-900x600.jpg",
        "effects":" Rheumatism, Nerve Pain, Skin Illness",
    },

    {
        "name":"Mitake",
        "location":"Kiso, Nagano Prefecture",
        "minerals": "Alkaline spring",
        "temperature": "70C/158F",
        "year": "Unknown",
        "img":"https://images.trvl-media.com/lodging/29000000/28080000/28079400/28079328/8a09e0e9.jpg?impolicy=resizecrop&rw=500&ra=fit",
        "effects":"Rheumatism, Nerve pain, Chronic Gastrointestinal Illness",
    },

    {
        "name":"Yuta",
        "location":"Yamaguchi, Yamaguchi Prefecture",
        "minerals": "Sodium chloride sulfuric spring",
        "temperature": "72C/162F",
        "year": 1658,
        "img":"https://s3.ap-northeast-1.amazonaws.com/production.guidoor.jp/images/V9iwL34RABvOug0tf2R1ka7HZB0jGF9YEbCZ0UhH.jpeg",
        "effects":"Nerve pain, Muscle/limb pain, stress relief, Chronic gastrointestinal illness",
    },

    {
        "name":"Tendo",
        "location":"Tsuruoka, Yamagata Prefecture",
        "minerals": "Alkaline spring",
        "temperature": "69C/156F",
        "year": 1912,
        "img":"https://cdn.jalan.jp/jalan/images/pict3L/Y0/Y311870/Y311870293.jpg",
        "effects":"Chronic skin illness, muscle/limb pain, Speedy recovery from sickness",
    },

    {
        "name":"Oshinohakkai",
        "location":"Fujikawaguchiko, Yamanashi Prefecture",
        "minerals": "Alkaline spring",
        "temperature": "29C/84F",
        "year": 1924,
        "img":"https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/po4k6z1awknkrmg8dxiz.jpg",
        "effects":"Rheumatism, Nerve pain, Skin illness, Insomnia",
    },

    {
        "name":"Yugashima",
        "location":"Izu, Shimane Prefecture",
        "minerals": "Sodium-hydrogen carbonate spring",
        "temperature": "50C/122F",
        "year": 1300,
        "img":"https://q-xx.bstatic.com/xdata/images/hotel/max500/51681849.jpg?k=7e6e991405cba827f32c1a38cd9fc4b57c1e021ba7a30e296cd78b15a8351b1f&o=",
        "effects":"Chronic gastrointestinal illness, Rheumatism, Nerve pain, Muscle/limb pain",
    },

    {
        "name":"Bandaiatami",
        "location":"Koriyama, Fukushima Prefecture",
        "minerals": "Sodium chloride spring",
        "temperature": "53C/127F",
        "year": 1296,
        "img":"https://selected-ryokan.com/wp-content/uploads/2015/10/fa405f1eaa0479b7bda9addae6e53d1c.jpg",
        "effects":"Wounds, Burns, Skin illness, Beauty benefits",
    },

    {
        "name":"Shirakawa",
        "location":"Takayama, Gify Prefecture",
        "minerals": "Sodium spring",
        "temperature": "98C/208F",
        "year": 1980,
        "img":"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_896,h_600/w_55,x_10,y_10,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/b5vol4kteiknizy9apbn/2D1NShirakawa-goTakayamaHiraseOnsenTourfromTokyo.jpg",
        "effects":"Nerve pain, Muscle/limb pain, Diabetes, Stress Relief, Bruises",
    },

    {
        "name":"Manza",
        "location":"Nakanojo, Gunma Prefecture",
        "minerals": "Acidic sulfur spring",
        "temperature": "80C/176F",
        "year": "Unknown",
        "img":"https://images.ctfassets.net/2uxxifu5nzlv/img_0408_1/f1a11949aa2af864f591805d563b13ad/kimg_kusatsu_01-02.jpg",
        "effects":"Improve metabolism, Peripheral circulation",
    },

    {
        "name":"Kakenagashi",
        "location":"Awawra, Fukui Prefecture",
        "minerals": "Alkaline spring",
        "temperature": "42C/108F",
        "year": 1883,
        "img":"https://i0.wp.com/kshouse.jp/articles/wp-content/uploads/2020/09/IMGP1613-2-scaled.jpg?fit=2560%2C1707&ssl=1",
        "effects":"Relaxation, Stress Relief",
    },

    {
        "name":"Miyagino",
        "location":"Murata, Miyagi Prefecture",
        "minerals": "Sulfate spring",
        "temperature": "72C/158F",
        "year": "Unknown",
        "img":"https://clubwyndhamsp.com/wp-content/uploads/2019/09/Hakone-Miyagino-Resort-gallery3.jpg",
        "effects":"Wounds, Burns, Beauty benefits",
    },

    {
        "name":"Yogan",
        "location":"Satsumasendai, Kagoshima Prefecture",
        "minerals": "Sodium chloride spring",
        "temperature": "51C/128F",
        "year": 1782,
        "img":"https://www.mt-fuji.gr.jp/cms_mt-fuji/wp-content/uploads/2019/07/Sensui-Onsen1.jpg",
        "effects":"Wounds, Nerve pain, Muscle/limb pain, Stress Relief",
    },

    {
        "name":"Yakushi",
        "location":"Kiso, Nagano Prefecture",
        "minerals": "Sulfate spring",
        "temperature": "46C/115F",
        "year": 1793,
        "img":"https://images.ctfassets.net/2uxxifu5nzlv/img_0390_2/cbfb0b0d27c0ecb5d871459d2a402419/img_Yakushi_Onsen_Hatago_2.jpg",
        "effects":"Nerve pain, Chronic gastrointestinal illness, Stress relief",


}];

// window.addEventListener('load', ()=>{
//     init();
// })

// const init = function(){
//     const onsenlocation = document.getElementById("onsenlocation");
    
//     // onsens.map(function(onsen){
//     //     // console.log(onsen.location);
//     //     const onsenItem = buildOnsenItemTest(onsen);
//     //     onsenlocation.innerHTML = onsenlocation.innerHTML + onsenItem;
//     // })
// }

// insertadjacentHTML

// const buildOnsenItem = function(onsen){
//     return `
//     <div class="onsen-item">
//         <img src=${onsen.img}>
//         <div class="text-content">
//             <h2>${onsen.location}</h2>
//             <p>${onsen.minerals}</p>
//             <p>${onsen.year}</p>
//             <p>${onsen.temperature}</p>
//             <p>${onsen.effects}</p>
//         </div>
//     </div>`
// }

const buildOnsenItemTest = function(onsen){
    return `
    <img src="${onsen.img}" class="images">
        <div class="text-content">
        <span class="ebcf_close">&times;</span>
            <h1>${onsen.name}</h1>
            <h2>${onsen.location}</h2>
            <p class="mineralsIcon">${onsen.minerals}</p>
            <p class="yearIcon">${onsen.year}</p>
            <p class="temperatureIcon">${onsen.temperature}</p>
            <p class="effectsIcon">${onsen.effects}</p>
        </div>
    `
}


var numberOfImage=25;

var parentDIV = document.querySelector("#grid-container-parent");
console.log(parentDIV);

for(var i=0;i<numberOfImage;i++){
    var tempDIV= document.createElement('div');
    tempDIV.setAttribute('class','grid-container');
    // var innerHTML= buildOnsenItemTest(onsens[i]);
    tempDIV.innerHTML=buildOnsenItemTest(onsens[i]);
    let textelement = tempDIV.querySelector('.text-content');
    let imageelement = tempDIV.querySelector('img');
    let ebSpan = tempDIV.querySelector('.ebcf_close');
    console.log(textelement);
    console.log(tempDIV);
    imageelement.addEventListener('click',(e)=>{
        textelement.style.display = 'block';
    });

    ebSpan.addEventListener('click',(e)=>{
        textelement.style.display = 'none';
    });

    console.log('creating image');
    parentDIV.appendChild(tempDIV);
} 

const gridContainer = document.querySelector('.ebcf_close');
gridContainer.addEventListener('click',(e)=>{
    console.log('clicked');
});

// for (let i = 0; i < 25; i++) {
// //   const img = document.createElement('img');
// //   img.src = `path-to-img/seperate-${i}.png`;
//   gridContainer.append(buildOnsenItemTest(onsens[i]));
// }


var map = L.map('map').setView([38.11880936922593, 138.34374705417355],4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// var Circle = L.circle([36.6185520429305, 138.5754683740618], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);


var dotCoordinates = [
    [36.62308096456125, 138.59311097419803],  //kusatsu
    [35.80888333974769, 137.23624936401777],  //Gero
    [33.85241325470183, 132.78394837845303],  //Dougo
    [33.29504463872149, 131.48449002592739],  //Beppu
    [34.794210596067124, 135.24636807095618],  //Arima
    [42.49440697543258, 141.14303239790127],  //Noboribetsu
    [31.237311337554626, 130.6368914329531],  //Ibusuki
    [35.24709673141864, 139.05475320028808],  //Hakone
    [35.62652824142141, 134.81256646898527],  //Kinosaki
    [33.26464347653399, 131.35930123740667],  //Yufuin
    [35.55568014755379, 134.4897265476829],  //Yumura
    [37.488400647039825, 139.93474343278632],  //Higashiyama
    [35.91674315065425, 137.6096339757547],  //Mitake
    [37.4480752012204, 139.94331259042772],  //Yunokami
    [34.165462939252, 131.45197562035054],  //Yuta
    [38.35963743658822, 140.38367411263292],  //Tendo
    [35.45977180893759, 138.83833479442148],  //Hakkai
    [34.889353574727735, 138.92573142305366],  //Yugashima
    [37.48754423490311, 140.26499625373108],  //Hakkai
    [36.17291771182737, 136.90259897601587],  //Bandai Atami
    [36.63810169942154, 138.5123858212901],  //Shirakawa
    [36.21656952506615, 136.24842674577565],  //Manza
    [38.795732989521575, 140.66898791803885],  //Kakenagashi
    [31.59137066992147, 130.59560469060418],  //Miyagiino
    [35.91674315065425, 137.5972743569546],  //yakushino
];

// Loop through the coordinates array and create a red dot for each set of coordinates
dotCoordinates.forEach(function(coord) {
    var circle = L.circle(coord, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map); // Add each red dot to the map
});

