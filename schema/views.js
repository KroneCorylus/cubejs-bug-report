view(`Product_Stock`, {
	public: true,
	cubes: [
		{
			join_path: fact,
			includes: ['quantity'],
		},
		{
			join_path: fact.product,
			includes: [
				{
					name: 'description',
					alias: 'product',
				},
			],
		},
		{
			join_path: fact.product.sub_category,
			includes: [
				{
					name: 'description',
					alias: 'sub_category',
				},
			],
		},
		{
			join_path: fact.product.sub_category.category,
			includes: [
				{
					name: 'description',
					alias: 'category',
				},
			],
		},
		{
			join_path: fact.product.model,
			includes: [
				{
					name: 'description',
					alias: 'model',
				},
			],
		},
		{
			join_path: fact.product.model.brand,
			includes: [
				{
					name: 'description',
					alias: 'brand',
				},
			],
		},
	],
});
