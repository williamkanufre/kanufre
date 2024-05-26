class FormSubmit {
  constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
          this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
      this.form.innerHTML = this.settings.success;
  }

  displayError() {
      this.form.innerHTML = this.settings.error;
  }

  getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
          formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
  }

  validateEmail(email) {
      const allowedDomains = ["gmail.com", "outlook.com", "hotmail.com"];
      const emailDomain = email.split("@")[1];
      return allowedDomains.includes(emailDomain);
  }

  validateForm() {
      const nome = this.form.querySelector("#nome").value.trim();
      const email = this.form.querySelector("#email").value.trim();
      const mensagem = this.form.querySelector("#mensagem").value.trim();

      if (!nome || !email || !mensagem) {
          alert("Todos os campos são obrigatórios.");
          return false;
      }

      if (!this.validateEmail(email)) {
          alert("Por favor, utilize um email do Gmail, Outlook ou Hotmail.");
          return false;
      }

      return true;
  }

  onSubmission(event) {
      event.preventDefault();
      if (!this.validateForm()) {
          this.formButton.disabled = false; // Re-enable button if validation fails
          return;
      }
      this.formButton.disabled = true;
      this.formButton.innerText = "Enviando...";
  }

  async sendForm(event) {
      try {
          this.onSubmission(event);
          if (this.formButton.disabled) { // Only proceed if button is disabled
              await fetch(this.url, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                  },
                  body: JSON.stringify(this.getFormObject()),
              });
              this.displaySuccess();
          }
      } catch (error) {
          this.displayError();
          this.formButton.disabled = false; // Re-enable button if there is an error
          this.formButton.innerText = "Enviar";
          throw new Error(error);
      }
  }

  init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Mensagem enviada!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();
