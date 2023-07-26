import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overlay',
  inputs: [
		"height",
		"left",
		"top",
		"width"
	],
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent {

  @Input() height!: number;
  @Input() left!: number;
  @Input() top!: number;
  @Input() width!: number;

  // public height!: number;
	// public left!: number;
	// public top!: number;
	// public width!: number;

	public fixedBottom: number;
	public fixedLeft: number;
	public fixedRight: number;
	public fixedTop: number;

  constructor() {
    this.fixedBottom = 0;
		this.fixedLeft = 0;
		this.fixedRight = 0;
		this.fixedTop = 0;
  }

  // ---
	// PUBLIC METHODS.
	// ---

	// I get called whenever the input bindings change.
	public ngOnChanges() : void {

		// Translate the input bindings to "fixed" coordinates.
		// --
		// NOTE: The Top/Left inputs are already intended to be "fixed", but we need to
		// calculate the Right/Bottom based on the dimensions of the window.
		this.fixedTop = Math.floor( this.top );
		this.fixedLeft = Math.floor( this.left );
		this.fixedRight = Math.floor( document.documentElement.clientWidth - ( this.left + this.width ) );
		this.fixedBottom = Math.floor( document.documentElement.clientHeight - ( this.top + this.height ) );

	}

}
