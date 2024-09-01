import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  originalAvatarSrc = 'assets/default-avatar.jpg';
  imageSrc = this.originalAvatarSrc;
  editMode:boolean=false;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private passwordService: PasswordService
  ) {
    this.userProfileForm = this.fb.group({
      name: [''],
      email: [{ value: '', disabled: true }],
      image: [null],
      currentPassword: [{ value: '', disabled: true }],
      newPassword: [{ value: '', disabled: true }],
      confirmPassword: [{ value: '', disabled: true }]
    });
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    const userData = this.userService.getUserData();
    if (userData) {
      this.userProfileForm.patchValue(userData);
      this.imageSrc = userData.image || this.originalAvatarSrc;
    }
  }

  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
        this.userProfileForm.patchValue({ image: file });
      };
      reader.readAsDataURL(file);
    }
  }

  enablePasswordFields(): void {
    this.editMode=true
    this.userProfileForm.get('currentPassword')?.enable();
    this.userProfileForm.get('newPassword')?.enable();
    this.userProfileForm.get('confirmPassword')?.enable();
    this.userProfileForm.get('name')?.disable();
    this.userProfileForm.get('image')?.disable();


  }

  cancelChanges(): void {
    this.editMode=false
    this.loadUserData();
    this.userProfileForm.get('currentPassword')?.disable();
    this.userProfileForm.get('newPassword')?.disable();
    this.userProfileForm.get('confirmPassword')?.disable();
    this.userProfileForm.get('name')?.enable();
    this.userProfileForm.get('image')?.enable();

  }

  saveChanges(): void {
    if(this.editMode){
      this.updatePassword();
    }else{
      this.updateNameAndImage();
    }

  }
  updateNameAndImage():void{
    const formData = new FormData();
    const formValues = this.userProfileForm.value;

    if (formValues.name) {
      formData.append('name', formValues.name);
    }
    if (formValues.image && formValues.image instanceof File) {
      formData.append('image', formValues.image, formValues.image.name);
    }

    this.userService.updateUserData(formData).subscribe({
      next: (response) => {
        localStorage.setItem("user", JSON.stringify(response.user));
        console.log('Changes saved to backend:', response);
      },
      error: (err) => {
        if (err.status === 400) {
          alert("Failed to save data");
        }
        console.error('Error saving changes to backend:', err);
      }
    });
  }

  updatePassword(): void {
    const { currentPassword, newPassword, confirmPassword } = this.userProfileForm.value;

    this.passwordService.changePassword(currentPassword, newPassword, confirmPassword).subscribe({
      next: (response) => {
        console.log('Password changed successfully:', response);
      },
      error: (err) => {
        if (err.status === 500) {
          alert("Server error, please try again");
        }
        if (err.status === 401) {
          alert("Incorrect current password");
        }
        if (err.status === 400) {
          alert("Invalid data provided");
        }
        console.error('Error changing password:', err);
      }
    });
  }
}
