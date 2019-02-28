export default [
    {
        type: 'row',
        panels: [
            {
                type: 'component',
                component: 'ImageView',
                props: {
                    src:
                        'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                }
            },
            {
                type: 'column',
                panels: [
                    {
                        type: 'row',
                        panels: [
                            {
                                type: 'component',
                                component: 'ImageView',
                                props: {
                                    src:
                                        'https://images.pexels.com/photos/908644/pexels-photo-908644.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                                }
                            },
                            {
                                type: 'component',
                                component: 'ImageView',
                                props: {
                                    src:
                                        'https://images.pexels.com/photos/1105189/pexels-photo-1105189.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                                }
                            }
                        ]
                    },
                    {
                        type: 'stack',
                        activeIndex: 0,
                        panels: [
                            {
                                type: 'component',
                                component: 'ImageView',
                                props: {
                                    src:
                                        'https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                                }
                            },
                            {
                                type: 'component',
                                component: 'ImageView',
                                props: {
                                    src:
                                        'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
