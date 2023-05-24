import { extend } from 'vee-validate';
import { required, numeric } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'The field {_field_} is required',
});

extend('numeric', {
  ...numeric,
  message: 'The field {_field_} must be numeric',
});
