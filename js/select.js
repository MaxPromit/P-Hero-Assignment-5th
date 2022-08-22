console.log('select');

function getPlayerValue(buttonValue){
    const mainContainer = document.getElementById('player_ordered_list');
    const tableContainer = document.createElement('li');
    tableContainer.innerText = buttonValue

    mainContainer.appendChild(tableContainer);
}

// 1 Messi 

document.getElementById('messi_btn').addEventListener('click',function(){
    const playerMessiName = document.getElementById('messi_name_value');
    const messiName = playerMessiName.innerText;

    getPlayerValue(messiName);

const button = document.getElementById('messi_btn');
button.disabled = true;

    })
//2 RonalDo 
document.getElementById('ronaldo_btn').addEventListener('click',function(){
    const playerRonaldoName = document.getElementById('ronaldo_name_value');
    const ronaldoName = playerRonaldoName.innerText;

    getPlayerValue(ronaldoName);

const button = document.getElementById('ronaldo_btn');
button.disabled = true;

    })

    //3 Aguero 
document.getElementById('aguero_btn').addEventListener('click',function(){
    const playerAgueroName = document.getElementById('aguero_name_value');
    const agueroName = playerAgueroName.innerText;

    getPlayerValue(agueroName);

const button = document.getElementById('aguero_btn');
button.disabled = true;

    })
    //4 Salah
document.getElementById('salah_btn').addEventListener('click',function(){
    const playerSalahName = document.getElementById('salah_name_value');
    const salahName = playerSalahName.innerText;

    getPlayerValue(salahName);

const button = document.getElementById('salah_btn');
button.disabled = true;

    })
    //5 Pique
document.getElementById('pk_btn').addEventListener('click',function(){
    const playerPkName = document.getElementById('pk_name_value');
    const pkName = playerPkName.innerText;

    getPlayerValue(pkName);

const button = document.getElementById('pk_btn');
button.disabled = true;

    })
    //6 Ramos
document.getElementById('ramos_btn').addEventListener('click',function(){
    const playerRamosName = document.getElementById('ramos_name_value');
    const ramosName = playerRamosName.innerText;

    getPlayerValue(ramosName);

const button = document.getElementById('ramos_btn');
button.disabled = true;

    })
    //7 Modric
document.getElementById('modric_btn').addEventListener('click',function(){
    const playerModricName = document.getElementById('modric_name_value');
    const modricName = playerModricName.innerText;

    getPlayerValue(modricName);

const button = document.getElementById('modric_btn');
button.disabled = true;

    })
    //8 Kane
document.getElementById('kane_btn').addEventListener('click',function(){
    const playerKaneName = document.getElementById('kane_name_value');
    const kaneName = playerKaneName.innerText;

    getPlayerValue(kaneName);

const button = document.getElementById('kane_btn');
button.disabled = true;

    })
    //9 Navas
document.getElementById('navas_btn').addEventListener('click',function(){
    const playerNavasName = document.getElementById('navas_name_value');
    const navasName = playerNavasName.innerText;

    getPlayerValue(navasName);

const button = document.getElementById('navas_btn');
button.disabled = true;

    })



