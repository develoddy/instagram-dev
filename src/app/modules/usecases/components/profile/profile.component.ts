import { Component } from '@angular/core';

interface Overlay {
	left: number;
	height: number;
	top: number;
	bottom: number;
	width: number;
}

var TRACER_CLASS = "-+-+-+-+-+-+-+-target-element-+-+-+-+-+-+-+-";

@Component({
  selector: 'app-profile',
  host: {
		"(document:click)": "handleClick( $event )",
		"(window:keydown.Esc)": "reset()",
		"(window:resize)": "reset()"
	},
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public targetOverlay: Overlay | null;

	private targetElement: HTMLElement | null;

  // I handle the mouse click on the document.
	public handleClick( event: MouseEvent ) : void {

		// If we have an existing element, remove the tracer class.
		// --
		// NOTE: This class serves no functional purpose other than to indicate where in
		// the DOM tree the selected target lives. This will show up in the Elements pane
		// of the Chrome Dev Tools, and will clearly illustrate the journey of the
		// selection as the user continues to click within a single DOM branch.
		if ( this.targetElement ) {
			this.targetElement.classList.remove( TRACER_CLASS );
		}

		this.targetElement = this.getNextTarget( event );
		this.targetOverlay = null;
		if ( this.targetElement ) {
			this.targetElement.classList.add( TRACER_CLASS );
			// The bounding client rectangle contains the FIXED location of the given
			// element within the browser's viewport.
			var rect = this.targetElement.getBoundingClientRect();
			this.targetOverlay = {
				height: rect.height,
				left: rect.left,
				top: rect.top,
				bottom: rect.bottom,
				width: rect.width
			};
		}
	}

  // I reset the state, clearing the target element and overlay.
	public reset() : void {
		this.targetElement = null;
		this.targetOverlay = null;
	}

  // ---
	// PRIVATE METHODS.
	// ---

	// I get the next target element based on the given mouse click event.
	private getNextTarget( event: MouseEvent ) : HTMLElement | null {
		var target = ( event.target as HTMLElement );
		// If we have an existing target element and the user clicked below the target
		// element but within the same DOM branch, let's move up one level in the DOM
		// tree.
		if ( this.targetElement && this.targetElement.contains( target ) ) {
			return( this.targetElement.parentElement || null );
		}
		// Otherwise, just use the user's click target.
		return( target );
	}
}