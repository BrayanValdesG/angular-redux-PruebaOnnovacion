import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState, selectAll } from './product.reducer';

export const productFeatureSelector = createFeatureSelector<ProductState>('products');

export const getAllProducts = createSelector(
    productFeatureSelector,
    selectAll
);

export const areProductsLoaded = createSelector(
    productFeatureSelector,
    state => state.productsLoaded
);