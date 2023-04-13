<template>
  <div class="m-input-field input-div">
    <p :for="id" v-if="label" class="title-label">{{label}}</p>
    <b-input-group
      v-if="inputType != 'password'"
      :class="{'invalid': invalid}"
    >
      <b-input 
        class="input"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :type="inputType"
        :required="required"  
        :disabled="disabled"
        :debounce="debounce"
        v-mask="mascara"
        :maxlength="maxlength"
        v-if="mascara"
        v-model="value" 
      >
      </b-input>
      <b-input 
        class="input"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :type="inputType"
        :required="required"  
        :debounce="debounce"
        :maxlength="maxlength"
        :disabled="disabled"
        v-else
        v-model="value" 
      >
      </b-input>
    </b-input-group>
    <b-input-group
      v-else
      :class="{'invalid': invalid}"
    >
      <b-input 
        class="input input-password"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :type="show ? 'text' : 'password'"
        :required="required"  
        :debounce="debounce"
        :disabled="disabled"
        :max="max"
        v-mask="mascara"
        v-if="mascara"
        v-model="value" 
        @focus="onFocus"
      >
      </b-input>
      <b-input 
        class="input input-password"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :debounce="debounce"
        :type="show ? 'text' : 'password'"
        :required="required"  
        :maxlength="maxlength"
        :disabled="disabled"
        v-else
        v-model="value" 
        @focus="onFocus"
      >
      </b-input>
      <b-input-group-prepend is-text class="showHideIcon">
        <Icons :icon="show ? 'eye-slash' : 'eye'" type="bootstrap" @clicked="showHide"></Icons>
      </b-input-group-prepend>
    </b-input-group>
  </div>
</template>

<script>

const _inputTypes = ['text', 'email', 'password'];
// import Icons from '@atoms/Icons';

export default {
  name: 'Input',
  components: {
    // Icons
  },
  // directives: {mask},
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    maxlength: {
      type: Number,
      required: false
    },
    debounce: {
      type: String,
      required: false,
      default: "0"
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    default: {
      type: [String, null],
      required: false,
      default: null
    },
    mascara: {
      type: [Array, String],
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    invalid: {
      type: Boolean,
      required: false,
      default: false
    },
    inputType: {
      type: String,
      required: false,
      default: 'text',
      validator: value => _inputTypes.includes(value),
    }
  },
  data: function() {
    return {
      value:this.default,
      show: false,
    }
  },
  watch: {
    value: function (val) {
      this.$emit("onChange", this.value);
    },
    default: function (val) {
      this.value = this.default;
    }
  },
  methods: {
    showHide() {
      this.show = !this.show;
    },
    onFocus() {
      this.$emit("onFocus", true);
    }
  }
}
</script>

<style lang="scss" scoped>
   
  .title-label {
    color: $_blue-strong;
  }
  .input-div {
    padding-top: 20px;
    p {
      margin: 0 0 5px 0;
      font-size: 13px;
      font-weight: 600;
    }
  }

  .input {
    border: 1px solid $_border-tint !important;
  }
  ::v-deep .invalid {
    .input {
      border: 1px solid $_error !important;
      // border-right: none !important;
    }
    .input-group-text {
      border-left: none !important;
      border-color: $_error !important;
    }
  }

  .input:active,
  .input:focus {
    outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
  }
  .input::placeholder {
    color: $_border-tint;
    font-size: 90%;
  }
  .input::-ms-input-placeholder {
    color: $_border-tint;
    font-size: 90%;
  }

  .showHideIcon {
    border: none !important;
    background-color: $_light-white !important;
  }

  .showHideIcon ::v-deep .icon-bootstrap{
    color: $_border-tint;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .showHideIcon ::v-deep .icon-bootstrap:hover{
    color: $_blue-strong;
  }

  .input-password {
    border-right: 0px !important;
  }

  .input-group-text {
    background-color: $_light-white !important;
    border-left: none;
    width: 48px;
    border-color: $_border-tint;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    border-top-right-radius: 4px !important;
    border-bottom-right-radius: 4px !important;
  }
</style>