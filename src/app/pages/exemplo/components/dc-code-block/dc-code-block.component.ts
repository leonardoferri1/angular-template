import {
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  signal,
} from '@angular/core';

@Component({
  selector: 'ds-code-block',
  standalone: true,
  template: `
    <div class="ds-code relative">
      <div class="ds-code__topbar">
        <span class="ds-code__lang">{{ language }}</span>
        <button
          type="button"
          class="ds-code__copy"
          (click)="copy()"
          [attr.aria-label]="copied() ? 'Copiado' : 'Copiar código'"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            />
          </svg>
          <span class="ds-code__copy-text">{{
            copied() ? 'Copiado!' : 'Copiar'
          }}</span>
        </button>
      </div>

      <pre class="ds-code__pre">
      <code #codeEl class="ds-code__code"><ng-content></ng-content></code>
    </pre>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .ds-code {
        background: #0b0b0b;
        border: 1px solid #1f1f1f;
        border-radius: 12px;
        overflow: hidden;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      .ds-code__topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 10px;
        border-bottom: 1px solid #1f1f1f;
        background: #0b0b0b;
      }
      .ds-code__lang {
        font-size: 12px;
        color: #9ca3af;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .ds-code__copy {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 8px;
        background: #111316;
        color: #d1d5db;
        border: 1px solid #2a2f36;
        cursor: pointer;
        transition: transform 0.05s ease, background 0.2s ease,
          border-color 0.2s ease;
      }
      .ds-code__copy:hover {
        background: #151922;
        border-color: #3a4150;
      }
      .ds-code__copy:active {
        transform: scale(0.98);
      }
      .ds-code__copy svg {
        fill: currentColor;
      }
      .ds-code__copy-text {
        line-height: 1;
      }
      .ds-code__pre {
        display: flex;
        margin: 0;
        padding: 2rem 1rem 2rem 1rem;
        overflow: auto;
        white-space: pre;
        word-break: normal;
        color: #e5e7eb;
        font-size: 14px;
      }
      .ds-code__code {
        display: block;
      }
    `,
  ],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsCodeBlockComponent {
  @ViewChild('codeEl', { static: true }) codeEl!: ElementRef<HTMLElement>;
  language = 'bash';

  private _copied = signal(false);
  copied = this._copied.asReadonly();

  async copy() {
    const text = this.codeEl.nativeElement.innerText.trim();
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const area = document.createElement('textarea');
        area.value = text;
        area.style.position = 'fixed';
        area.style.left = '-9999px';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
      }
      this._copied.set(true);
      setTimeout(() => this._copied.set(false), 1600);
    } catch {}
  }
}
