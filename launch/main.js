// var table = [
//   "H", "Hydrogen", "1.00794", 1, 1,
//   "He", "Helium", "4.002602", 18, 1,
//   "Li", "Lithium", "6.941", 1, 2,
//   "Be", "Beryllium", "9.012182", 2, 2,
//   "B", "Boron", "10.811", 13, 2,
//   "C", "Carbon", "12.0107", 14, 2,
//   "N", "Nitrogen", "14.0067", 15, 2,
//   "O", "Oxygen", "15.9994", 16, 2,
//   "F", "Fluorine", "18.9984032", 17, 2,
//   "Ne", "Neon", "20.1797", 18, 2,
//   "Na", "Sodium", "22.98976...", 1, 3,
//   "Mg", "Magnesium", "24.305", 2, 3,
//   "Al", "Aluminium", "26.9815386", 13, 3,
//   "Si", "Silicon", "28.0855", 14, 3,
//   "P", "Phosphorus", "30.973762", 15, 3,
//   "S", "Sulfur", "32.065", 16, 3,
//   "Cl", "Chlorine", "35.453", 17, 3,
//   "Ar", "Argon", "39.948", 18, 3,
//   "K", "Potassium", "39.948", 1, 4,
//   "Ca", "Calcium", "40.078", 2, 4,
//   "Sc", "Scandium", "44.955912", 3, 4,
//   "Ti", "Titanium", "47.867", 4, 4,
//   "V", "Vanadium", "50.9415", 5, 4,
//   "Cr", "Chromium", "51.9961", 6, 4,
//   "Mn", "Manganese", "54.938045", 7, 4,
//   "Fe", "Iron", "55.845", 8, 4,
//   "Co", "Cobalt", "58.933195", 9, 4,
//   "Ni", "Nickel", "58.6934", 10, 4,
//   "Cu", "Copper", "63.546", 11, 4,
//   "Zn", "Zinc", "65.38", 12, 4,
//   "Ga", "Gallium", "69.723", 13, 4,
//   "Ge", "Germanium", "72.63", 14, 4,
//   "As", "Arsenic", "74.9216", 15, 4,
//   "Se", "Selenium", "78.96", 16, 4,
//   "Br", "Bromine", "79.904", 17, 4,
//   "Kr", "Krypton", "83.798", 18, 4,
//   "Rb", "Rubidium", "85.4678", 1, 5,
//   "Sr", "Strontium", "87.62", 2, 5,
//   "Y", "Yttrium", "88.90585", 3, 5,
//   "Zr", "Zirconium", "91.224", 4, 5,
//   "Nb", "Niobium", "92.90628", 5, 5,
//   "Mo", "Molybdenum", "95.96", 6, 5,
//   "Tc", "Technetium", "(98)", 7, 5,
//   "Ru", "Ruthenium", "101.07", 8, 5,
//   "Rh", "Rhodium", "102.9055", 9, 5,
//   "Pd", "Palladium", "106.42", 10, 5,
//   "Ag", "Silver", "107.8682", 11, 5,
//   "Cd", "Cadmium", "112.411", 12, 5,
//   "In", "Indium", "114.818", 13, 5,
//   "Sn", "Tin", "118.71", 14, 5,
//   "Sb", "Antimony", "121.76", 15, 5,
//   "Te", "Tellurium", "127.6", 16, 5,
//   "I", "Iodine", "126.90447", 17, 5,
//   "Xe", "Xenon", "131.293", 18, 5,
//   "Cs", "Caesium", "132.9054", 1, 6,
//   "Ba", "Barium", "132.9054", 2, 6,
//   "La", "Lanthanum", "138.90547", 4, 9,
//   "Ce", "Cerium", "140.116", 5, 9,
//   "Pr", "Praseodymium", "140.90765", 6, 9,
//   "Nd", "Neodymium", "144.242", 7, 9,
//   "Pm", "Promethium", "(145)", 8, 9,
//   "Sm", "Samarium", "150.36", 9, 9,
//   "Eu", "Europium", "151.964", 10, 9,
//   "Gd", "Gadolinium", "157.25", 11, 9,
//   "Tb", "Terbium", "158.92535", 12, 9,
//   "Dy", "Dysprosium", "162.5", 13, 9,
//   "Ho", "Holmium", "164.93032", 14, 9,
//   "Er", "Erbium", "167.259", 15, 9,
//   "Tm", "Thulium", "168.93421", 16, 9,
//   "Yb", "Ytterbium", "173.054", 17, 9,
//   "Lu", "Lutetium", "174.9668", 18, 9,
//   "Hf", "Hafnium", "178.49", 4, 6,
//   "Ta", "Tantalum", "180.94788", 5, 6,
//   "W", "Tungsten", "183.84", 6, 6,
//   "Re", "Rhenium", "186.207", 7, 6,
//   "Os", "Osmium", "190.23", 8, 6,
//   "Ir", "Iridium", "192.217", 9, 6,
//   "Pt", "Platinum", "195.084", 10, 6,
//   "Au", "Gold", "196.966569", 11, 6,
//   "Hg", "Mercury", "200.59", 12, 6,
//   "Tl", "Thallium", "204.3833", 13, 6,
//   "Pb", "Lead", "207.2", 14, 6,
//   "Bi", "Bismuth", "208.9804", 15, 6,
//   "Po", "Polonium", "(209)", 16, 6,
//   "At", "Astatine", "(210)", 17, 6,
//   "Rn", "Radon", "(222)", 18, 6,
//   "Fr", "Francium", "(223)", 1, 7,
//   "Ra", "Radium", "(226)", 2, 7,
//   "Ac", "Actinium", "(227)", 4, 10,
//   "Th", "Thorium", "232.03806", 5, 10,
//   "Pa", "Protactinium", "231.0588", 6, 10,
//   "U", "Uranium", "238.02891", 7, 10,
//   "Np", "Neptunium", "(237)", 8, 10,
//   "Pu", "Plutonium", "(244)", 9, 10,
//   "Am", "Americium", "(243)", 10, 10,
//   "Cm", "Curium", "(247)", 11, 10,
//   "Bk", "Berkelium", "(247)", 12, 10,
//   "Cf", "Californium", "(251)", 13, 10,
//   "Es", "Einstenium", "(252)", 14, 10,
//   "Fm", "Fermium", "(257)", 15, 10,
//   "Md", "Mendelevium", "(258)", 16, 10,
//   "No", "Nobelium", "(259)", 17, 10,
//   "Lr", "Lawrencium", "(262)", 18, 10,
//   "Rf", "Rutherfordium", "(267)", 4, 7,
//   "Db", "Dubnium", "(268)", 5, 7,
//   "Sg", "Seaborgium", "(271)", 6, 7,
//   "Bh", "Bohrium", "(272)", 7, 7,
//   "Hs", "Hassium", "(270)", 8, 7,
//   "Mt", "Meitnerium", "(276)", 9, 7,
//   "Ds", "Darmstadium", "(281)", 10, 7,
//   "Rg", "Roentgenium", "(280)", 11, 7,
//   "Cn", "Copernicium", "(285)", 12, 7,
//   "Nh", "Nihonium", "(286)", 13, 7,
//   "Fl", "Flerovium", "(289)", 14, 7,
//   "Mc", "Moscovium", "(290)", 15, 7,
//   "Lv", "Livermorium", "(293)", 16, 7,
//   "Ts", "Tennessine", "(294)", 17, 7,
//   "Og", "Oganesson", "(294)", 18, 7
// ];

var table = [
  "Sputnik 1", "苏联","	4 October 1957",1,2,
  "Explorer 1", "美国", "1 February 1958", 3, 2,
  "Ariel 1", "英国", "26 April 1962", 8, 2,
  "Alouette 1", "加拿大","29 September 1962", 9, 2,
  "San Marco 1", "意大利", "15 December 1964", 12, 2,
  "Astérix", "法国","26 November 1965", 14, 2,
  "WRESAT", "澳大利亚", "29 November 1967", 17, 2,
  "ESRO 2B", "欧洲国家", "17 May 1968", 2, 3,
  "Azur", "德国", "8 November 1969", 4, 3,
  "Ohsumi", "日本", "11 February 1970", 6, 3,
  "Dongfanghong I", "中国", "24 April 1970", 7, 3,
  "ANS", "荷兰", "30 August 1974", 12, 3,
  "Intasat", "西班牙", "15 November 1974", 13, 3,
  "Aryabhata", "印度", "19 April 1975",  15, 3,
  "Palapa A1", "印度尼西亚", "8 July 1976", 17, 3,
  "Morelos 1", "墨西哥", "17 June 1985", 10, 4,
  "Viking", "瑞典", "22 February 1986", 12, 4,
  "Ofek-1", "以色列", "19 September 1988", 15, 4,
  "AsiaSat 1", "香港", "7 April 1990", 17, 4,
  "Badr-1", "巴基斯坦", "16 July 1990", 1, 5,  //20
  "Kosmos 2175", "俄罗斯", "21 January 1992", 4, 5,
  "Kitsat-1", "韩国", "10 August 1992", 5, 5,
  "Thaicom-1", "泰国", "18 December 1993", 7, 5,
  "Turksat 1B", "土耳其", "10 August 1994", 9, 5,
  "Sich-1", "乌克兰", "31 August 1995", 11, 5,
  "FASat-Alfa", "智利", "31 August 1995", 12, 5,
  "MEASAT-1", "马来西亚", "13 January 1996", 14, 5, //27
  "ABS-3", "菲律宾", "20 March 1987", 13, 4,
  "Nilesat 101", "埃及", "28 April 1998", 17, 5,
  "ST-1", "新加坡", "25 August 1998", 1, 6,  //30
  "Formosat-1", "台湾", "27 January 1999", 3, 6,
  "Ørsted", "丹麦", "23 February 1999", 4, 6,
  "Thuraya 1", "阿联酋", "21 October 2000", 6, 6,
  "PROBA-1", "比利时", "22 October 2001", 8, 6,
  "AlSAT-1", "阿尔及利亚", "28 November 2002", 10, 6, //35
  "Hellas-Sat 2", "希腊", "13 May 2003", 12, 6,
  "NigeriaSat-1", "尼日利亚", "27 September 2003", 13, 6,
  "Sina-1", "伊朗", "27 October 2005", 16, 6,
  "KazSat-1", "哈萨克斯坦", "17 June 2006", 1, 7,
  "Libertad-1", "哥伦比亚", "17 April 2007", 3, 7, //40
  "Vinasat-1", "越南", "18 April 2008", 5, 7,  //41
  "Venesat-1", "委内瑞拉", "29 October 2008", 6, 7,
  "SwissCube-1", "瑞士", "23 September 2009", 8, 7,
  "X-Sat", "新加坡", "20 April 2011", 11, 7,
  "ViaSat-1", "马恩岛", "19 October 2011", 12, 7,
  "PW-Sat", "波兰", "13 February 2012", 14, 7,
  "Azerspace-1", "阿塞拜疆", "7 February 2013", 16, 7,
  "UniBRITE[", "奥地利", "25 February 2013", 17, 7,
  "NEE-01 Pegaso", "厄瓜多尔", "26 April 2013", 1, 8,
  "ESTCube-1", "爱沙尼亚", "7 May 2013", 2, 8,  //50
  "O3b", "泽西岛", "25 June 2013", 3, 8,
  "LitSat-1", "立陶宛", "9 January 2014", 5, 8,
  "BRAC ONNESHA", "孟加拉国", "3 June 2017", 9, 8,
  "GhanaSat-1", "加纳", "3 June 2017", 10, 8,
  "Mazaalai", "蒙古", "3 June 2017", 11, 8, //55
  "Humanity Star", "新西兰", "21 January 2018", 13, 8,
  "1KUNS-PF", "肯尼亚", "2 April 2018", 14, 8,
  "Bhutan 1", "不丹", "29 June 2018", 15, 8,
  "Raavana 1", "斯里兰卡", "17 April 2019", 17, 8  //59
];

var camera, scene, renderer;
var controls;
//线的场景，渲染器
var scene2, renderer2;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 3000;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  scene = new THREE.Scene();

  for (var i = 0; i < table.length; i += 5) {

    var element = document.createElement('div');
    element.className = 'element';
 
    // element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
    // element.style.backgroundImage = 'url("' + table[i + 1] + '")';
    // element.style.backgroundSize = 'contain';
    
    //console.log(table[i + 2]);
    element.style.background ='url("' + "./assets/image/"+ ((i/5)+1) +".png" + '")'+'no-repeat';// table[i + 5];
   element.style.backgroundSize = 'contain';

    // var eleBackgroundImage = document.createElement('div');
    // eleBackgroundImage.className = 'eleBackgroundImage';
    // eleBackgroundImage.style.background = 'url("' + table[i + 1] + '")';
    // eleBackgroundImage.style.backgroundSize = 'contain';
    // element.appendChild(eleBackgroundImage);

    var number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

      var symbol = document.createElement('div');
      symbol.className = 'symbol';
      symbol.textContent = table[i];
      element.appendChild(symbol);

    var details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    var object = new THREE.CSS3DObject(element);
    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;
    scene.add(object);
    objects.push(object);

    //点击事件
    // element.addEventListener('click', eleclick, false);
    element.id = object.uuid;
    // var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
    // var geometry = new THREE.Geometry();
    // geometry.vertices.push(new THREE.Vector3( object.position.x, object.position.y, object.position.z) );
    // geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );

    var object = new THREE.Object3D();
    object.position.x = (table[i + 3] * 140) - 1330;
    object.position.y = - (table[i + 4] * 180) + 990;

    targets.table.push(object);
  }

  // sphere

  const vector = new THREE.Vector3();

  for (let i = 0, l = objects.length; i < l; i++) {

    const phi = Math.acos(- 1 + (2 * i) / l);
    const theta = Math.sqrt(l * Math.PI) * phi;

    const object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    vector.copy(object.position).multiplyScalar(2);

    object.lookAt(vector);

    targets.sphere.push(object);

  }

  // helix

  for (let i = 0, l = objects.length; i < l; i++) {

    const theta = i * 0.175 + Math.PI;
    const y = - (i * 8) + 450;

    const object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    vector.x = object.position.x * 2;
    vector.y = object.position.y;
    vector.z = object.position.z * 2;

    object.lookAt(vector);

    targets.helix.push(object);

  }

  // grid

  for (let i = 0; i < objects.length; i++) {

    const object = new THREE.Object3D();

    object.position.x = ((i % 5) * 400) - 800;
    object.position.y = (- (Math.floor(i / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(i / 25)) * 1000 - 2000;

    targets.grid.push(object);

  }


  renderer = new THREE.CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('container').appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera);
  controls.rotateSpeed = 0.5;
  controls.minDistance = 500;
  controls.maxDistance = 6000;

  controls.addEventListener('change', render);


  const buttonTable = document.getElementById('table');
  buttonTable.addEventListener('click', function () {

    transform(targets.table, 2000);

  });

  const buttonSphere = document.getElementById('sphere');
  buttonSphere.addEventListener('click', function () {

    transform(targets.sphere, 2000);

  });

  const buttonHelix = document.getElementById('helix');
  buttonHelix.addEventListener('click', function () {

    transform(targets.helix, 2000);

  });

  const buttonGrid = document.getElementById('grid');
  buttonGrid.addEventListener('click', function () {

    transform(targets.grid, 2000);

  });

  // const buttonShowBGC = document.getElementById('showBGC');
  // buttonShowBGC.addEventListener('click', function () {
  //   controlShowImage(false);
  // });

  // const buttonShowImage = document.getElementById('showImage');
  // buttonShowImage.addEventListener('click', function () {
  //   controlShowImage(true);
  // });

  transform(targets.table, 2000);
  window.addEventListener('resize', onWindowResize, false);

}

function transform(targets, duration) {

  TWEEN.removeAll();

  for (var i = 0; i < objects.length; i++) {

    var object = objects[i];
    var target = targets[i];

    new TWEEN.Tween(object.position)
      .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

    new TWEEN.Tween(object.rotation)
      .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

  }
  new TWEEN.Tween(this).to({}, duration * 2).onUpdate(render).start();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
  controls.update();
}

function render() {
  renderer.render(scene, camera);
}

/*
* 线条的渲染 (先 return)
*/
function eleclick(e) {
  return;
  e.preventDefault();
  var uuid = e.currentTarget.id;
  var $canvas = document.getElementById('canvas');
  //当前坐标背景颜色
  document.getElementById(uuid).style.backgroundColor = 'yellow';
  $canvas.innerHTML = '';

  renderer2 = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: false });
  renderer2.setSize(window.innerWidth, window.innerHeight);
  renderer2.setClearColor(0xFFFFFF, 0.0);
  $canvas.appendChild(renderer2.domElement);

  var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  var geometry = new THREE.Geometry();

  var tempArr = getRandomArrayElements(objects, 5, uuid);
  //获取当前点击的坐标
  var myarr = tempArr.my;
  //其他5个点的坐标
  var selectArr = tempArr.other;
  //当前坐标与其他5个点的坐标连线
  for (var i = 0; i < selectArr.length; i++) {
    geometry.vertices.push(new THREE.Vector3(myarr[0].position.x, myarr[0].position.y, myarr[0].position.z));
    geometry.vertices.push(new THREE.Vector3(selectArr[i].position.x, selectArr[i].position.y, selectArr[i].position.z));
    //其他5个做个背景颜色
    document.getElementById(selectArr[i].uuid).style.backgroundColor = 'red';
  };
  var lines = new THREE.Line(geometry, material);
  scene2 = new THREE.Scene();
  scene2.add(lines);

  renderer2.clear();

  animateLines();
  window.addEventListener('resize', onWindowResizeLines, false);
}
/*
* 临时使用，提供随机数
*/
function getRandomArrayElements(arr, count, uuid) {
  var other = [];
  var my = [];
  for (var i = 0; i < count; i++) {
    var n = Math.floor(Math.random() * 100 + 8);
    if (uuid != arr[n].uuid) {
      other.push(arr[n]);
    }
  };
  for (var i = 0; i < arr.length; i++) {
    if (uuid == arr[i].uuid) {
      my.push(arr[i]);
    } else {
      document.getElementById(arr[i].uuid).style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
    }
  };
  return { my: my, other: other };
}
/*
* 线条缩放
 */
function onWindowResizeLines() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer2.setSize(window.innerWidth, window.innerHeight);
  renderer2.render(scene2, camera);
}
/*
* 线条动画
*/
function animateLines() {
  requestAnimationFrame(animateLines);
  renderer2.render(scene2, camera);
}


// function controlShowImage(isShowImage) {
//   document.querySelectorAll('.element ').forEach(el => {  //.element .eleBackgroundImage')
//     if (isShowImage) {
//       el.classList.add('show');
//     }
//     else {
//       el.classList.remove('show');
//     }
//   });
// }