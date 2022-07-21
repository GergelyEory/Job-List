import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-select-tag',
	templateUrl: './select-tag.component.html',
	styleUrls: ['./select-tag.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectTagComponent {
	@Input() value!: string;
	@Input() removable: boolean = false;
	@Output() removed = new EventEmitter<string>();

	onRemove(): void {
		this.removed.emit(this.value);
	}
}
