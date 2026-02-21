import { TestBed } from '@angular/core/testing';
import { SeoService } from './seo.service';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { DOCUMENT } from '@angular/common';

describe('SeoService', () => {
  let service: SeoService;
  let document: Document;

  const translateServiceMock = {
    get: jasmine.createSpy('get').and.returnValue(of('translated')),
    instant: jasmine.createSpy('instant').and.returnValue('translated')
  };

  const titleServiceMock = {
    setTitle: jasmine.createSpy('setTitle')
  };

  const metaServiceMock = {
    updateTag: jasmine.createSpy('updateTag')
  };

  const routerMock = {
    events: of()
  };

  const activatedRouteMock = {
    firstChild: null,
    outlet: 'primary',
    data: of({})
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SeoService,
        { provide: TranslateService, useValue: translateServiceMock },
        { provide: Title, useValue: titleServiceMock },
        { provide: Meta, useValue: metaServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    });
    service = TestBed.inject(SeoService);
    document = TestBed.inject(DOCUMENT);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setCanonicalUrl', () => {
    it('should add a link tag when one does not exist', () => {
      const url = 'https://example.com';
      service.setCanonicalUrl(url);
      const link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
      expect(link).toBeTruthy();
      expect(link?.getAttribute('href')).toBe(url);
      
      // Cleanup
      link?.remove();
    });

    it('should update the link tag when one already exists', () => {
      const oldUrl = 'https://old.com';
      const newUrl = 'https://new.com';
      
      // Create initial link
      const initialLink = document.createElement('link');
      initialLink.setAttribute('rel', 'canonical');
      initialLink.setAttribute('href', oldUrl);
      document.head.appendChild(initialLink);

      service.setCanonicalUrl(newUrl);
      const link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
      expect(link?.getAttribute('href')).toBe(newUrl);

      // Cleanup
      link?.remove();
    });

    it('should remove the link tag when url is null', () => {
      const initialLink = document.createElement('link');
      initialLink.setAttribute('rel', 'canonical');
      initialLink.setAttribute('href', 'https://example.com');
      document.head.appendChild(initialLink);

      service.setCanonicalUrl('');
      const link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
      expect(link).toBeNull();
    });
  });
});
