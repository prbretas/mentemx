const { test, expect } = require('@playwright/test');

// ── NAVEGAÇÃO ──
test.describe('Navegação', () => {
  test('página carrega sem erros no console', async ({ page }) => {
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    expect(errors).toHaveLength(0);
  });

  test('todos os links do nav apontam para seções existentes', async ({ page }) => {
    await page.goto('/');
    const links = await page.locator('.nav-links a').all();
    for (const link of links) {
      const href = await link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = page.locator(href);
        await expect(section).toBeAttached();
      }
    }
  });

  test('logo linka para o topo', async ({ page }) => {
    await page.goto('/');
    const logoLink = page.locator('.logo-nav');
    const href = await logoLink.getAttribute('href');
    expect(href).toBe('#hero');
  });
});

// ── HERO ──
test.describe('Hero', () => {
  test('vídeo de fundo existe', async ({ page }) => {
    await page.goto('/');
    const video = page.locator('#heroVideo');
    await expect(video).toBeAttached();
  });

  test('botões CTA existem e linkam corretamente', async ({ page }) => {
    await page.goto('/');
    const btnSaiba = page.locator('.hero-btns .btn-primary');
    const btnCampeoes = page.locator('.hero-btns .btn-secondary');
    await expect(btnSaiba).toHaveAttribute('href', '#planos');
    await expect(btnCampeoes).toHaveAttribute('href', '#campeoes');
  });
});

// ── STATS ──
test.describe('Stats', () => {
  test('seção stats visível com 4 itens', async ({ page }) => {
    await page.goto('/');
    const stats = page.locator('.stat-item');
    await expect(stats).toHaveCount(4);
  });

  test('contadores têm data-target definido', async ({ page }) => {
    await page.goto('/');
    const counters = page.locator('.count-up');
    await expect(counters).toHaveCount(4);
    for (const counter of await counters.all()) {
      const target = await counter.getAttribute('data-target');
      expect(parseInt(target)).toBeGreaterThan(0);
    }
  });
});

// ── CAMPEÕES ──
test.describe('Campeões', () => {
  test('3 cards de campeões visíveis', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('.champ-card');
    await expect(cards).toHaveCount(3);
  });

  test('links do Instagram abrem em nova aba', async ({ page }) => {
    await page.goto('/');
    const links = page.locator('.champ-img a');
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute('target', '_blank');
      const href = await link.getAttribute('href');
      expect(href).toContain('instagram.com');
    }
  });
});

// ── SERVIÇOS ──
test.describe('Serviços', () => {
  test('3 cards de planos visíveis', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('.serv-card');
    await expect(cards).toHaveCount(3);
  });

  test('botões contratar linkam para WhatsApp', async ({ page }) => {
    await page.goto('/');
    const btns = page.locator('.btn-serv');
    for (const btn of await btns.all()) {
      const href = await btn.getAttribute('href');
      expect(href).toContain('wa.me');
    }
  });
});

// ── FAQ ──
test.describe('FAQ', () => {
  test('perguntas expandem ao clicar', async ({ page }) => {
    await page.goto('/');
    const firstQ = page.locator('.faq-q').first();
    const firstA = page.locator('.faq-a').first();

    // Inicialmente fechado
    await expect(firstA).not.toHaveClass(/open/);

    // Clicar para abrir
    await firstQ.click();
    await expect(firstA).toHaveClass(/open/);
  });

  test('FAQ tem role=button e aria-expanded', async ({ page }) => {
    await page.goto('/');
    const questions = page.locator('.faq-q');
    for (const q of await questions.all()) {
      await expect(q).toHaveAttribute('role', 'button');
      await expect(q).toHaveAttribute('aria-expanded');
    }
  });
});

// ── CONTATO ──
test.describe('Contato', () => {
  test('formulário exibe todos os campos', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#c-name')).toBeAttached();
    await expect(page.locator('#c-email')).toBeAttached();
    await expect(page.locator('#c-msg')).toBeAttached();
  });

  test('custom select de modalidade funciona', async ({ page }) => {
    await page.goto('/');
    const trigger = page.locator('#customSelectTrigger');
    const options = page.locator('#customSelectOptions');

    // Clicar para abrir
    await trigger.click();
    const wrap = page.locator('#customSelectWrap');
    await expect(wrap).toHaveClass(/open/);

    // Selecionar opção
    await page.locator('.custom-select-option[data-value="Motocross"]').click();
    const hidden = page.locator('#c-sport');
    expect(await hidden.inputValue()).toBe('Motocross');
  });
});

// ── CTA FLUTUANTE ──
test.describe('CTA Flutuante', () => {
  test('botão WhatsApp visível', async ({ page }) => {
    await page.goto('/');
    const btn = page.locator('#floatBtn');
    await expect(btn).toBeVisible();
  });

  test('menu expande ao clicar', async ({ page }) => {
    await page.goto('/');
    const btn = page.locator('#floatBtn');
    await btn.click();
    const cta = page.locator('#floatCta');
    await expect(cta).toHaveClass(/open/);
  });

  test('3 opções no menu expandido', async ({ page }) => {
    await page.goto('/');
    await page.locator('#floatBtn').click();
    const options = page.locator('.float-option');
    await expect(options).toHaveCount(3);
  });
});

// ── RESPONSIVIDADE ──
test.describe('Responsividade', () => {
  test('hamburger aparece em mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const hamburger = page.locator('.hamburger');
    await expect(hamburger).toBeVisible();
  });

  test('nav-links ocultos em mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const navLinks = page.locator('.nav-links');
    await expect(navLinks).not.toBeVisible();
  });
});

// ── PERFORMANCE ──
test.describe('Performance', () => {
  test('imagens abaixo do fold têm lazy loading', async ({ page }) => {
    await page.goto('/');
    const lazyImages = page.locator('img[loading="lazy"]');
    const count = await lazyImages.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('sem erros 404 em recursos', async ({ page }) => {
    const failed = [];
    page.on('response', response => {
      if (response.status() === 404 && !response.url().includes('favicon')) {
        failed.push(response.url());
      }
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(failed).toHaveLength(0);
  });
});
