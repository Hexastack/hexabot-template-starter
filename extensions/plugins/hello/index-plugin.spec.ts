/*
 * Copyright © 2025 Hexastack. All rights reserved.
 *
 * This file is part of the Hexabot starter template.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 *
 * IMPORTANT: If you use this starter template for your own projects, please update this license header to reflect your own license details.
 *
 * Replace this header with your own copyright and license information to ensure compliance with your chosen license.
 */

import { Test, TestingModule } from '@nestjs/testing';

import { PluginService } from '@/plugins/plugins.service';

import { HelloPlugin } from './index.plugin';

describe('HelloPlugin', () => {
  let helloPlugin: HelloPlugin;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HelloPlugin,
        {
          provide: PluginService,
          useValue: {},
        },
      ],
    }).compile();

    helloPlugin = module.get<HelloPlugin>(HelloPlugin);
  });

  it('should be defined', () => {
    expect(helloPlugin).toBeDefined();
  });
});
