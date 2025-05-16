const platforms: PlatformInfo[] = [
          { id: 4, slug: 'pc', name: 'PC', father: 'pc' },
          { id: 187, slug: 'playstation-5', name: 'PlayStation 5', father: 'playstation'},
          { id: 1, slug: 'xbox-one', name: 'Xbox One', father: 'xbox' },
          { id: 18, slug: 'playstation-4', name: 'PlayStation 4', father: 'playstation' },
          { id: 186, slug: 'xbox-series-x', name: 'Xbox Series S/X', father: 'xbox' },
          { id: 7, slug: 'nintendo-switch', name: 'Nintendo Switch', father: 'nintendo' },
          { id: 21, slug: 'mobile', name: 'Mobile', father: 'mobile' },
          { id: 8, slug: 'nintendo-3ds', name: 'Nintendo 3DS', father: 'nintendo' },
          { id: 9, slug: 'nintendo-ds', name: 'Nintendo DS', father: 'nintendo' },
          { id: 14, slug: 'xbox-360', name: 'Xbox 360', father: 'xbox' },
          { id: 80, slug: 'xbox-old', name: 'Xbox', father: 'xbox' },
          { id: 16, slug: 'playstation-3', name: 'PlayStation 3', father: 'playstation' },
          { id: 15, slug: 'playstation-2', name: 'PlayStation 2', father: 'playstation' },
          { id: 19, slug: 'ps-vita', name: 'PS Vita', father: 'playstation' },
          { id: 17, slug: 'psp', name: 'PSP', father: 'playstation' },
          { id: 10, slug: 'wii-u', name: 'Wii U', father: 'nintendo' },
          { id: 11, slug: 'wii', name: 'Wii', father: 'nintendo' }
        ];

export function getPlatformIdBySlug(slug: string): PlatformInfo {
    try {
        
        const platform = platforms.find(p => p.slug === slug);
        if (!platform) {
            throw new Error(`Platform with slug "${slug}" not found`);
        }
        return platform;
        
    } catch (error) {
        throw error;
    }
  }

export function getPlatformById(id: number): PlatformInfo {
    try {
        
        const platform = platforms.find(p => p.id === id);
        if (!platform) {
            throw new Error(`Platform with slug "${id}" not found`);
        }
        return platform;
        
    } catch (error) {
        throw error;
    }
  }

export interface PlatformInfo {
    name: string,
    id: number,
    slug: string,
    father: string
}