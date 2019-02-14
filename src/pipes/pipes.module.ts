import { NgModule } from '@angular/core';
import { ThumbnailPipe } from './thumbnail/thumbnail';
import { DescriptionPipe } from './description/description';
@NgModule({
	declarations: [ThumbnailPipe,
    DescriptionPipe],
	imports: [],
	exports: [ThumbnailPipe,
    DescriptionPipe]
})
export class PipesModule {}
