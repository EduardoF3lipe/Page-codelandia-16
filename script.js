const daysElement = document.querySelector("[data-days]")
const hoursElement = document.querySelector("[data-hours]")
const minutesElement = document.querySelector("[data-minutes]")
const secondsElement = document.querySelector("[data-seconds]")


const render = (days,hours,minutes, seconds) => {
    
    //irá rendezirar no HTML chamando pelo innerHTML
    daysElement.innerHTML = String(days).padStart("2",0);
    hoursElement.innerHTML = String(hours).padStart("2",0);
    minutesElement.innerHTML = String(minutes).padStart("2",0);
    secondsElement.innerHTML = String(seconds).padStart("2",0);

    //String(days).padStart("2",0) --- irá validar se houver menos que dois digitos, irá adicionar um 0 à esquerda.
};

const countdown = () => {

    // data atual completa
    const now = new Date();

    //Ano atual + 1
    const nextYear = now.getFullYear() + 1;

    //mostra o primeiro dia do primeiro mês do próximo ano ( TargetDate = data alvo , 
    //Nextyear = próximo ano, 
    //0 = array que consta os meses, inicia com 0 (janeiro) e Dezembro 11. 
    //1 = primeiro dia do Mes.)
    const targetDate = new Date (nextYear, 0, 1);

    //mostra o dia alvo - dia atual em milesegundos.
    const timeLeft = targetDate - now;

    //const que irá mostrar em segundos,minutos,horas,dias
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    const hours = Math.floor(((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    const minutes = Math.floor((timeLeft % (1000 * 60 * 60 ))/ (1000 * 60));

    const seconds = Math.floor((timeLeft % (1000 * 60))/ 1000);

    
    //função para exibir as variaveis
    render (days, hours, minutes, seconds);
}

//chamar a função
setInterval (countdown, 1);



//

AOS.init();