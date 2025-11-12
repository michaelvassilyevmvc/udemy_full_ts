const box = document.querySelector('.box') as HTMLElement;
const input = document.querySelector('input') as HTMLInputElement;
const link = document.querySelector('a') as HTMLAnchorElement;
const p = document.querySelector('p') as HTMLParagraphElement;
const links = document.querySelectorAll('.a');


if (link) {
  link.href = "dkdkdkdk"
}

const elem = document.createElement('a');
link?.addEventListener('click', (e) => {
  e.preventDefault();
})