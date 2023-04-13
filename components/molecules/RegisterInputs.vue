<template>
  <div class="content-register">
    <div>
      <Input
        v-for="(item, i) in inputs"
        :key="i"
        :id="item.id"
        :label="item.label"
        :placeholder="item.placeholder"
        :inputType="item.iputType"
        :name="item.name"
        :mascara="item.mascara ? setMask(item.default) : null"
        :default="setDefault(item.default)"
        :required="item.required"
        :invalid="item.invalid ? enableInvalid && setInvalid(item.default) : null"
        :disabled="loading"
        @onChange="(val) => updateVariable(val, item.default)"
      />

      <Select
        id="gender"
        label="Gênero *"
        name="gender"
        class="input-contato"
        :options="genders"
        :default="gender"
        :invalid="enableInvalid && !gender"
        :disabled="loading"
        @selectedSelect="(val) => (gender = val)"
      />
    </div>

    <div>
      <Button
        label="Criar conta"
        class="btn-login"
        :outline="false"
        :loading="loading"
        @btnClicked="sendForm"
      />

      <Button
        label="Voltar"
        class="btn-login-register"
        :icon="'arrow-left'"
        :outline="false"
        :loading="loading"
        @btnClicked="backToLogin"
      />
    </div>
  </div>
</template>

<script>
import Input from "@atoms/Input";
import Select from "@atoms/Select";
import Button from "@atoms/Button";
import { mapActions } from "vuex";

export default {
  name: "RegisterInputs",

  components: {
    Input,
    Select,
    Button,
  },

  computed: {
    mascara: function () {
      return this.$telephoneMask(this.phone);
    },

    emailReady: function () {
      if (this.email != "" && this.email.length > 0) {
        return this.$emailValidator(this.email);
      } else {
        return false;
      }
    },

    verifyInputs: function () {
      return (
        this.name.length > 0 &&
        this.password.length > 0 &&
        this.username.length > 0 &&
        this.email.length > 0 &&
        this.birthday.length > 0 &&
        this.gender.length > 0 && 
        this.email.length > 0 &&
        this.gender != null
      );
    },
  },

  data() {
    return {
      name: "",
      username: "",
      password: "",
      email: "",
      aboutMe: "",
      phone: "",
      birthday: "",
      loading: false,
      enableInvalid: false,
      gender: null,
      genders: [
        {
          text: "Masculino",
          value: "M",
        },
        {
          text: "Feminino",
          value: "F",
        },
      ],
      inputs: [
        {
          id: "nameRegister",
          label: "Nome *",
          placeholder: "Jon Snow Targaryen",
          name: "name",
          default: "name",
          iputType: "text",
          invalid: true,
          required: true,
        },

        {
          id: "usernameRegister",
          label: "Username *",
          placeholder: "white_wolf",
          name: "username",
          default: "username",
          iputType: "text",
          invalid: true,
          required: true,
        },

        {
          id: "passwordRegister",
          label: "Senha *",
          placeholder: "",
          name: "password",
          default: "password",
          iputType: "password",
          invalid: true,
          required: true,
        },

        {
          id: "emailRegister",
          label: "Email *",
          placeholder: "reidonorte@gmail.com",
          name: "email",
          default: "email",
          iputType: "text",
          invalid: true,
          required: true,
        },

        {
          id: "aboutMeRegister",
          label: "Descrição",
          placeholder: "Rei do norte, último Targaryen",
          name: "aboutMe",
          default: "aboutMe",
          iputType: "text",
          required: false,
        },

        {
          id: "phoneRegister",
          label: "Telefone",
          placeholder: "(00) 94002-8922",
          name: "phone",
          mascara: true,
          default: "phone",
          iputType: "text",
          required: false,
        },

        {
          id: "birthdayRegister",
          label: "Data de Nascimento *",
          placeholder: "DD/MM/YYYY",
          name: "birthday",
          mascara: true,
          invalid: true,
          default: "birthday",
          iputType: "text",
          required: true,
        },
      ],
    };
  },

  methods: {
    updateVariable(val, nameVar) {
      this[nameVar] = val;
    },

    setDefault(nameVar) {
      return this[nameVar];
    },

    setMask(nameVar) {
      const object = {
        phone: this.mascara,
        birthday: "##/##/####",
      };

      return object[nameVar];
    },

    setInvalid(nameVar) {
      const object = {
        name: this.name.length == 0,
        username: this.username.length == 0,
        password: this.password.length == 0,
        email: this.email.length == 0 || !this.emailReady,
        birthday: this.birthday.length == 0
      };

      return object[nameVar];
    },

    backToLogin() {
      this.$emit("backToLogin");
    },

    clearInputs() {
      this.name = "";
      this.username = "";
      this.password = "";
      this.email = "";
      this.aboutMe = "";
      this.phone = "";
      this.birthday = "";
      this.enableInvalid = false;
      this.gender = null;
    },

    sendForm() {
      this.enableInvalid = true;

      if (this.verifyInputs) {
        // check password
        if (this.password.length <= 5) {
          this.$notify({
            group: "notifications",
            type: "error",
            title: "Senha Inválida!",
            text: `A senha deve ter ao menos 6 caracteres.`,
          });
          return;
        }

        // check email
        if (!this.emailReady) {
          this.$notify({
            group: 'notifications',
            type: 'error',
            title: 'Email Inválido!',
            text: `O email é inválido, verifique a digitação e tente novamente!.`
          });
          return;
        }

        this.loading = true;

        // Build the payload
        const payload = {
          name: this.name,
          username: this.username,
          password: this.password,
          email: this.email,
          aboutMe: this.aboutMe,
          phone: this.phone,
          birthday: this.birthday.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$3-$2-$1'),
          gender: this.gender
        };

        this.createUser(payload).then((data) => {
          this.loading = false;
          if (!data) return;
          this.clearInputs();
          this.backToLogin();
        });

      } else {
        this.$showFillFields();
      }
    },

    ...mapActions("users", ["createUser"])

  },
};
</script>

<style lang="scss" scoped>
.content-register {
  width: 100%;
}
</style>