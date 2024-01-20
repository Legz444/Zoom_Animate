window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

document.querySelector("#start_btn").addEventListener('click', () => {
    document.querySelector('#bg').classList.add('animate');
    let btn = document.querySelector("#start_btn")
    btn.style.display = 'none';
    Clouds();
})

function Clouds(){
    document.querySelector('#cloud1').classList.add('cloud_animate');
    document.querySelector('#cloud2').classList.add('cloud_animate');
    document.querySelector('#cloud3').classList.add('cloud_animate');
    Hello();
}

function Hello(){
    let hello = document.querySelector('#hello')
    hello.style.display = "flex";

}