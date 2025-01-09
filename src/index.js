import emailjs from 'emailjs-com';

class Navbar {
  constructor(navbarButtonSelector, navbarDefaultSelector) {
    this.navbarButton = document.querySelector(navbarButtonSelector);
    this.navbarDefault = document.querySelector(navbarDefaultSelector);
    this.init();
  }

  init() {
    this.navbarButton.addEventListener('click', () => this.toggleNavbar());
  }

  toggleNavbar() {
    this.navbarDefault.classList.toggle('hidden');
  }
}

class Accordion {
  constructor(buttonElement) {
    this.button = buttonElement;
    this.content = this.button.nextElementSibling;
    this.icon = this.button.querySelector('svg');

    this.isOpen = false;

    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.content.style.maxHeight = this.content.scrollHeight + 'px';
    this.icon.style.transform = 'rotate(180deg)';
    this.isOpen = true;
  }

  close() {
    this.content.style.maxHeight = null;
    this.icon.style.transform = 'rotate(0deg)';
    this.isOpen = false;
  }
}

class Forms {
  constructor() {
    this.nome = document.querySelector('#nome');
    this.telefone = document.querySelector('#telefone');
    this.email = document.querySelector('#email');
    this.textArea = document.querySelector('#text-area');
    this.button = document.querySelector('#formButton');

    this.apiKey = 'bhRBFzhHBxu1h5KRh';
    this.serviceID = 'service_ngnhgp7';
    this.templateID = 'template_ys5ps1q';

    // Inicializa o EmailJS
    emailjs.init(this.apiKey);

    this.button.addEventListener('submit', event => {
      event.preventDefault();
      this.SendInfo();
    });
  }

  SendInfo() {
    const nome = this.nome.value;
    const telefone = this.telefone.value;
    const email = this.email.value;
    const textArea = this.textArea.value;

    // Envia o e-mail usando o EmailJS
    emailjs
      .send(this.serviceID, this.templateID, {
        form_name: nome,
        email: email,
        telefone: telefone,
        form_message: textArea,
      })
      .then(response => {
        alert('Mensagem enviada com sucesso!');
      })
      .catch(error => {
        alert('Erro ao enviar a mensagem: ' + error);
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion-toggle');

  accordionButtons.forEach(button => new Accordion(button));
  new Navbar('#navbar-button', '#navbar-default');

  new Forms();
});
