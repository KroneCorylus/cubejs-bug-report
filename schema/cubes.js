cube(`fact`, {
	sql_table: `fact`,
	dimensions: {
		id: {
			sql: 'id',
			type: 'number',
			primary_key: true,
		},
		id_product: {
			sql: 'id_product',
			type: 'number',
		},
	},
	measures: {
		quantity: {
			sql: 'quantity',
			type: 'sum',
		},
	},
	joins: {
		product: {
			relationship: 'many_to_one',
			sql: `${CUBE}.id_product = ${product.id_product}`,
		},
	},
});

cube(`product`, {
	sql_table: `product`,
	dimensions: {
		id_product: {
			sql: 'id_product',
			type: 'number',
			primary_key: true,
		},
		description: {
			sql: 'description',
			type: 'number',
		},
	},
	joins: {
		model: {
			relationship: 'many_to_one',
			sql: `${CUBE}.id_model = ${model.id_model}`,
		},
		sub_category: {
			relationship: 'many_to_one',
			sql: `${CUBE}.id_sub_category = ${sub_category.id_sub_category}`,
		},
	},
});
cube(`model`, {
	sql_table: `model`,
	dimensions: {
		id_model: {
			sql: 'id_model',
			type: 'number',
			primary_key: true,
		},
		description: {
			sql: 'description',
			type: 'number',
		},
	},
	joins: {
		brand: {
			relationship: 'many_to_one',
			sql: `${CUBE}.id_brand = ${brand.id_brand}`,
		},
	},
});
cube(`brand`, {
	sql_table: `brand`,
	dimensions: {
		id_brand: {
			sql: 'id_brand',
			type: 'number',
			primary_key: true,
		},
		description: {
			sql: 'description',
			type: 'number',
		},
	},
});
cube(`sub_category`, {
	sql_table: `sub_category`,
	dimensions: {
		id_sub_category: {
			sql: 'id_sub_category',
			type: 'number',
			primary_key: true,
		},
		description: {
			sql: 'description',
			type: 'number',
		},
	},
	joins: {
		category: {
			relationship: 'many_to_one',
			sql: `${CUBE}.id_category = ${category.id_category}`,
		},
	},
});
cube(`category`, {
	sql_table: `category`,
	dimensions: {
		id_category: {
			sql: 'id_category',
			type: 'number',
			primary_key: true,
		},
		description: {
			sql: 'description',
			type: 'number',
		},
	},
});
