console.log('select');

function getPlayerValue(buttonValue){
    const mainContainer = document.getElementById('player_ordered_list');
    const numb = mainContainer.children.length;
    if(numb >= 5){
        alert('You Cant Pick More Than 5 Player');
        return;
    }


    const tableContainer = document.createElement('li');
    tableContainer.innerText = buttonValue

    mainContainer.appendChild(tableContainer);
    
}

// calculation Part 

function howManyPlayer(){
    const mainContainer = document.getElementById('player_ordered_list');
    const numb = mainContainer.children.length;
    return numb;
}


document.getElementById('calculate_btn').addEventListener('click', function playerExpense(amount){
  const player = howManyPlayer();
//   console.log(player)

const perPlayerField =   document.getElementById('per_player_field');
const perPlayerFieldValueString = perPlayerField.value;
const perPlayerFieldValue = parseInt(perPlayerFieldValueString);
// console.log(perPlayerFieldValue)

// expenses
const overAllPlayerExpenses = perPlayerFieldValue * player;

const totalExpenses = document.getElementById('player_expenses');
const totalExpensesAmount = totalExpenses.innerText;

totalExpenses.innerText = overAllPlayerExpenses;

return overAllPlayerExpenses;
})

document.getElementById('calculate_total_btn').addEventListener('click',function(){
    const totalExpenses = document.getElementById('player_expenses').innerText;
    const totalExpensesAmount = parseInt(totalExpenses);
    // console.log(totalExpensesAmount)

    // manager field
    const managerField = document.getElementById('manager_btn');
    const managerFieldString = managerField.value;
    const managerFieldValue = parseInt(managerFieldString);
    // console.log(managerFieldValue)

    // coach
    const coachField = document.getElementById('coach_btn');
    const coachFieldString = coachField.value;
    const coachFieldValue = parseInt(coachFieldString);
    // console.log(coachFieldValue)

    // total 

    const newTotalAmount = totalExpensesAmount + managerFieldValue + coachFieldValue;

    const totalAmount = document.getElementById('total_amount');
    const totalAmountValue = totalAmount.innerText;

    totalAmount.innerText = newTotalAmount;
})







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



