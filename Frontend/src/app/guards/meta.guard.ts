import { CanActivateFn } from '@angular/router';
import { MetaService } from '../services/meta-service/meta.service';
import { inject } from '@angular/core';

export const MetaGaurd: CanActivateFn = (next, state) => {
  let metaService = inject(MetaService);
  const title = next.data['title'];
  const description = next.data['description'];

  metaService.setMetaInformation(title, description);
  return true;
};
