import { Component, EventEmitter, Input, Output, Pipe } from '@angular/core';
import { TextTransformPipe } from '../../../pipes/text-transform.pipe';

@Component({
  selector: 'app-modal-popup',
  standalone: true,
  imports: [
    TextTransformPipe
  ],
  templateUrl: './modal-popup.component.html',
  styleUrl: './modal-popup.component.scss'
})
export class ModalPopupComponent {

  @Input() modalType = 'success';
  @Input() modalBody = 'Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.';
  @Input() modalDuration:number = 0;
  @Output() closeModalEvent = new EventEmitter<Boolean>();

  isModalOpen:boolean = true;
  progress:number = 100;
  timer:any;
  modalTheme:{[key:string]:{bgColor:string, icon:string}} = {
    success: {
      bgColor:'var(--bg-green)',
      icon: 'fa fa-thumbs-up'
    },
    error: {
      bgColor:'var(--bg-red)',
      icon: 'fa fa-exclamation-triangle'
    },
    warning: {
      bgColor:'var(--bg-yellow)',
      icon: 'fa fa-spinner'
    },
    info: {
      bgColor:'var(--bg-primary)',
      icon: 'fa fa-info-circle'
    }
  }

  ngOnInit() {
    if (this.modalDuration > 0) {
      const totalDuration = 3000;
      const intervalDuration = 30;
      const decrementAmount = (intervalDuration / totalDuration) * 100;

      this.timer = setInterval(() => {
        this.progress -= decrementAmount;
        if (this.progress <= 0) {
          this.closeModal();
        }
      }, intervalDuration);
    }
  }

  closeModal() {
    this.modalType = '';
    this.modalBody = '';
    this.isModalOpen = false;
    clearInterval(this.timer);
    this.closeModalEvent.emit(true);
  }
}
