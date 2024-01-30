import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password: string = control.value;
    
    const hasLowercase: boolean = /[a-z]/.test(password);
    const hasUppercase: boolean = /[A-Z]/.test(password);
    const hasDigit: boolean = /\d/.test(password);
    const hasSpecialChar: boolean = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    const violatedConstraints: string[] = [];

    if (!hasLowercase) {
      violatedConstraints.push('at least one lowercase letter');
    }

    if (!hasUppercase) {
      violatedConstraints.push('at least one uppercase letter');
    }

    if (!hasDigit) {
      violatedConstraints.push('at least one digit');    }

    if (!hasSpecialChar) {
      violatedConstraints.push('at least one special character');
    }

    const isValid: boolean = hasLowercase && hasUppercase && hasDigit && hasSpecialChar;

    return isValid ? null : {
      passwordStrength: {
        valid: false,
        message: `Password must contain ${violatedConstraints.join(', ')}.`,
      },
    };
  };
}
