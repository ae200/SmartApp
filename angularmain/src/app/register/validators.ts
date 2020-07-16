import { FormGroup, AbstractControl } from "@angular/forms";

// export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
//     return (formgroup: FormGroup): {
//         [key: string]: any
//     } => {
//         let password = formgroup.controls[passwordKey];
//         let password2 = formgroup.controls[confirmPasswordKey];

//         if (password.value !== password2.value) {
//             return {
//                 mismatchedPasswords: true
//             };
//         }
//     }
// }


// To validate password and confirm password
export function ComparePassword(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}