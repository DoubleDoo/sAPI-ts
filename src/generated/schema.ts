export interface paths {
    "/getAccountInfo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get account info
         * @description Cost of the request execution: 1 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /** @example {} */
                    "application/json": Record<string, never>;
                    /** @example {} */
                    "application/x-www-form-urlencoded": Record<string, never>;
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GetAccountInfoResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/getCategoryInfo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get category info
         * @description Cost of the request execution: 1 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": 1798
                     *     }
                     */
                    "application/json": components["schemas"]["GetCategoryInfoRequest"];
                    /**
                     * @example {
                     *       "id": 1798
                     *     }
                     */
                    "application/x-www-form-urlencoded": components["schemas"]["GetCategoryInfoRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GetCategoryInfoResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/getCitiesList": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get cities list in country
         * @description Cost of the request execution: 1 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": 107
                     *     }
                     */
                    "application/json": components["schemas"]["GetCitiesListRequest"];
                    /**
                     * @example {
                     *       "id": 107
                     *     }
                     */
                    "application/x-www-form-urlencoded": components["schemas"]["GetCitiesListRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GetCitiesListResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/getCountryList": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get country list
         * @description Cost of the request execution: 1 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": Record<string, never>;
                    "application/x-www-form-urlencoded": Record<string, never>;
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GetCountryListResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/getCurencyList": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get currency list
         * @description Cost of the request execution: 1 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": Record<string, never>;
                    "application/x-www-form-urlencoded": Record<string, never>;
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GetCurrencyListResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/getSubCategory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get subcategories list
         * @description Cost of the request execution: 1 points.
         *
         *     The method returns a list of subcategories for the specified category.
         *           The response returns a list of subcategories for which there are no subcategories.
         *           For each subcategory, the identifier, name, flag indicating that the subcategory has subcategories,
         *           and the recommended price are returned.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": 126
                     *     }
                     */
                    "application/json": components["schemas"]["GetSubCategoryRequest"];
                    /**
                     * @example {
                     *       "id": 126
                     *     }
                     */
                    "application/x-www-form-urlencoded": components["schemas"]["GetSubCategoryRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GetSubCategoryResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/deleteItem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Remove lot from the list of finished ones
         * @description Cost of the request execution: 0 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": 123456789
                     *     }
                     */
                    "application/json": components["schemas"]["DeleteItemRequest"];
                    /**
                     * @example {
                     *       "id": 123456789
                     *     }
                     */
                    "application/x-www-form-urlencoded": components["schemas"]["DeleteItemRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DeleteItemResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/getCommonDescriptionList": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get list of standard descriptions
         * @description Cost of the request execution: 1 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["GetCommonDescriptionListRequest"];
                    "application/x-www-form-urlencoded": components["schemas"]["GetCommonDescriptionListRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GetCommonDescriptionListResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/getFinishedItemList": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get list of lots, the auctions of which are finished
         * @description Cost of the request execution: 10 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["GetFinishedItemListRequest"];
                    "application/x-www-form-urlencoded": components["schemas"]["GetFinishedItemListRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GetFinishedItemListResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/getItemInfo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get lot info
         * @description Cost of the request execution: 1 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["GetItemInfoRequest"];
                    "application/x-www-form-urlencoded": components["schemas"]["GetItemInfoRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GetItemInfoResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/getItemList": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get list of lots on sale
         * @description Cost of the request execution: 10 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["GetItemListRequest"];
                    "application/x-www-form-urlencoded": components["schemas"]["GetItemListRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GetItemListResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/getSoldFinishedItemList": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get list of lots, the auctions of which are finished and there is one deal on them
         * @description Cost of the request execution: 10 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["GetSoldFinishedItemListRequest"];
                    "application/x-www-form-urlencoded": components["schemas"]["GetSoldFinishedItemListRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GetSoldFinishedItemListResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/getUnsoldFinishedItemList": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get list of lots, the auctions of which are finished and there is no one deal on them
         * @description Cost of the request execution: 10 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["GetUnsoldFinishedItemListRequest"];
                    "application/x-www-form-urlencoded": components["schemas"]["GetUnsoldFinishedItemListRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GetUnsoldFinishedItemListResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/listItem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * List lot on sale
         * @description Cost of the request execution: 10 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ListItemRequest"];
                    "application/x-www-form-urlencoded": components["schemas"]["ListItemRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ListItemResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/relistItem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Relist lot on repeated auctions
         * @description Cost of the request execution: 2 point.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": 290730300
                     *     }
                     */
                    "application/json": components["schemas"]["RelistItemRequest"];
                    /**
                     * @example {
                     *       "id": 290730300
                     *     }
                     */
                    "application/x-www-form-urlencoded": components["schemas"]["RelistItemRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RelistItemResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stopSale": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stop sale of a lot
         * @description Cost of the request execution: 0 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /**
                     * @example {
                     *       "id": 290730300
                     *     }
                     */
                    "application/json": components["schemas"]["StopSaleRequest"];
                    /**
                     * @example {
                     *       "id": 290730300
                     *     }
                     */
                    "application/x-www-form-urlencoded": components["schemas"]["StopSaleRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["StopSaleResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/updateItem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Change the parameters of an existing lot
         * @description Cost of the request execution: 1 points.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["UpdateItemRequest"];
                    "application/x-www-form-urlencoded": components["schemas"]["UpdateItemRequest"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UpdateItemResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * @description Checked seller status.
         *     - Y - Yes;
         *     - N - No.
         * @enum {string}
         */
        YesOrNo: "Y" | "N";
        GetAccountInfoResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example {
             *       "checkedSeller": "Y",
             *       "cityId": 32,
             *       "countryId": 1
             *     }
             */
            result?: {
                checkedSeller: components["schemas"]["YesOrNo"];
                /** @description City ID. */
                cityId: number;
                /** @description Country ID. */
                countryId: number;
            } | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        /** @description List of parameters with their identifiers. */
        CategoryParamOptions: {
            [key: string]: number;
        };
        CategoryParamOption: {
            /**
             * @description Parameter type.
             * @enum {string}
             */
            type: "options";
            /** @description If the multi flag is set to true, then multiple options can be used for one lot. */
            multi: boolean;
            options: components["schemas"]["CategoryParamOptions"];
        };
        CategoryParamCheckbox: {
            /**
             * @description Parameter type.
             * @enum {string}
             */
            type: "checkbox";
            /** @description Parameter ID */
            id: number;
        };
        /** @description List of parameters of the section, intended for use in the categoryParams field of the listItem and updateItem methods. */
        CategoryParams: {
            [key: string]: components["schemas"]["CategoryParamOption"] | components["schemas"]["CategoryParamCheckbox"];
        };
        GetCategoryInfoResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example {
             *       "id": 1798,
             *       "name": "Другие",
             *       "parentId": 252,
             *       "subCategories": false,
             *       "recommendedPrice": 23,
             *       "params": {
             *         "Гарантия подлинности": {
             *           "type": "options",
             *           "multi": false,
             *           "options": {
             *             "От продавца": 432,
             *             "Экспертное заключение": 433,
             *             "Нет": 434
             *           }
             *         },
             *         "Набор": {
             *           "type": "options",
             *           "multi": false,
             *           "options": {
             *             "Да": 784,
             *             "Нет": 785
             *           }
             *         },
             *         "Состояние": {
             *           "type": "options",
             *           "multi": false,
             *           "options": {
             *             "Proof": 5,
             *             "UNC": 6,
             *             "AU": 7,
             *             "XF": 8,
             *             "VF": 9,
             *             "F": 10,
             *             "VG": 11,
             *             "G": 12,
             *             "AG": 13,
             *             "Fair": 14,
             *             "Basal": 15,
             *             "VF+": 165,
             *             "XF+": 166,
             *             "AU+": 167
             *           }
             *         },
             *         "Металл": {
             *           "type": "options",
             *           "multi": false,
             *           "options": {
             *             "Золото": 17,
             *             "Серебро": 18,
             *             "Бронза": 19,
             *             "Медь": 20,
             *             "Медь-Никель": 21,
             *             "Медь-Цинк": 22,
             *             "Никель": 23,
             *             "Алюминий": 24,
             *             "Железо": 25,
             *             "Магний": 26,
             *             "Марганец": 27,
             *             "Олово": 28,
             *             "Платина": 29,
             *             "Хром": 30,
             *             "Цинк": 31,
             *             "Алюминиевая Бронза": 32,
             *             "Аурихалк": 33,
             *             "Белый Металл": 34,
             *             "Биллон": 35,
             *             "Вирениум": 36,
             *             "Колокольный металл": 37,
             *             "Коронное золото": 38,
             *             "Латунь": 39,
             *             "Никелевая латунь": 40,
             *             "Никелевое серебро": 41,
             *             "Нержавеющая сталь": 42,
             *             "Пинчбек": 43,
             *             "Пушечный металл": 44,
             *             "Потин": 45,
             *             "Пьютер": 46,
             *             "Спекулум": 47,
             *             "Сталь": 48,
             *             "Томпак": 49,
             *             "Электр": 50,
             *             "Биметалл": 441,
             *             "Палладий": 15710,
             *             "Титан": 16076
             *           }
             *         }
             *       }
             *     }
             */
            result?: {
                /** @description Category ID */
                id: number;
                /** @description Category name */
                name: string;
                /** @description Parent category ID */
                parentId: number;
                /**
                 * @description Subcategories presence:
                 *     true - subcategories exist
                 *     false - subcategories do not exist
                 */
                subCategories: boolean;
                /** @description Only for categories without subcategories: Cost of the service Promotional lot for this category in rubles. */
                recommendedPrice?: number;
                params: components["schemas"]["CategoryParams"];
            } | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        /**
         * @example {
         *       "id": 32,
         *       "name": "Москва"
         *     }
         */
        CityInfo: {
            /** @description City ID */
            id: number;
            /** @description City name */
            name: string;
        };
        GetCitiesListResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example [
             *       {
             *         "id": 1,
             *         "name": "Абакан1"
             *       },
             *       {
             *         "id": 3,
             *         "name": "Анапа"
             *       },
             *       {
             *         "id": 5,
             *         "name": "Белокуриха"
             *       },
             *       {
             *         "id": 6,
             *         "name": "Брянск"
             *       },
             *       {
             *         "id": 7,
             *         "name": "Владивосток"
             *       }
             *     ]
             */
            result?: components["schemas"]["CityInfo"][] | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        /**
         * @example {
         *       "id": 1,
         *       "name": "Россия"
         *     }
         */
        CountryInfo: {
            /** @description Country ID */
            id: number;
            /** @description Country name */
            name: string;
        };
        GetCountryListResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example [
             *       {
             *         "id": 107,
             *         "name": "Россия"
             *       },
             *       {
             *         "id": 108,
             *         "name": "Эстония"
             *       },
             *       {
             *         "id": 109,
             *         "name": "Украина"
             *       },
             *       {
             *         "id": 280,
             *         "name": "Великобритания"
             *       },
             *       {
             *         "id": 281,
             *         "name": "О.А.Э."
             *       },
             *       {
             *         "id": 282,
             *         "name": "Марокко"
             *       },
             *       {
             *         "id": 283,
             *         "name": "Индия"
             *       },
             *       {
             *         "id": 284,
             *         "name": "Австралия"
             *       }
             *     ]
             */
            result?: components["schemas"]["CountryInfo"][] | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        /**
         * @example {
         *       "id": 2,
         *       "symbol": "RUB"
         *     }
         */
        CurrencyInfo: {
            /** @description Currency ID */
            id: number;
            /** @description Currency name */
            symbol: string;
        };
        GetCurrencyListResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example [
             *       {
             *         "id": 1,
             *         "symbol": "USD"
             *       },
             *       {
             *         "id": 2,
             *         "symbol": "RUB"
             *       },
             *       {
             *         "id": 3,
             *         "symbol": "EUR"
             *       },
             *       {
             *         "id": 4,
             *         "symbol": "UAH"
             *       },
             *       {
             *         "id": 5,
             *         "symbol": "BYN"
             *       },
             *       {
             *         "id": 6,
             *         "symbol": "KZT"
             *       },
             *       {
             *         "id": 7,
             *         "symbol": "mBTC"
             *       }
             *     ]
             */
            result?: components["schemas"]["CurrencyInfo"][] | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        SubCategoryInfo: {
            /** @description Category ID */
            id: number;
            /** @description Category name */
            name: string;
            /**
             * @description Subcategories presence:
             *     - true - subcategories exist;
             *     - false - subcategories do not exist.
             */
            subCategories: boolean;
            /** @description Only for categories without subcategories: Cost of the service "Featured lot" for this category in rubles. */
            recommendedPrice?: number;
        };
        GetSubCategoryResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example [
             *       {
             *         "id": 2401,
             *         "name": "Патефоны, граммофоны",
             *         "subCategories": true
             *       },
             *       {
             *         "id": 14106,
             *         "name": "Другие",
             *         "subCategories": false,
             *         "recommendedPrice": 13
             *       },
             *       {
             *         "id": 14107,
             *         "name": "Аккордеоны, баяны, гармони",
             *         "subCategories": false,
             *         "recommendedPrice": 13
             *       },
             *       {
             *         "id": 14108,
             *         "name": "Губные гармошки",
             *         "subCategories": false,
             *         "recommendedPrice": 13
             *       },
             *       {
             *         "id": 14109,
             *         "name": "Духовые инструменты",
             *         "subCategories": false,
             *         "recommendedPrice": 13
             *       },
             *       {
             *         "id": 14110,
             *         "name": "Клавишные инструменты",
             *         "subCategories": false,
             *         "recommendedPrice": 13
             *       },
             *       {
             *         "id": 14111,
             *         "name": "Колокольчики и колокола",
             *         "subCategories": false,
             *         "recommendedPrice": 13
             *       },
             *       {
             *         "id": 14112,
             *         "name": "Музыкальные шкатулки, полифоны",
             *         "subCategories": false,
             *         "recommendedPrice": 13
             *       },
             *       {
             *         "id": 14113,
             *         "name": "Струнные инструменты",
             *         "subCategories": false,
             *         "recommendedPrice": 13
             *       },
             *       {
             *         "id": 14114,
             *         "name": "Литература, каталоги",
             *         "subCategories": false,
             *         "recommendedPrice": 13
             *       }
             *     ]
             */
            result?: components["schemas"]["SubCategoryInfo"][] | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        DeleteItemResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example {
             *       "id": 123456789
             *     }
             */
            result?: {
                /** @description Identifier. */
                id: number;
            } | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        CommonDescription: {
            /** @description ID */
            id: number;
            /** @description Name */
            name: string;
            /** @description Common description */
            commonDescription: string;
        };
        GetCommonDescriptionListResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example [
             *       {
             *         "id": 2234,
             *         "name": "Yellow penguin",
             *         "commonDescription": "Yellow penguin description text"
             *       },
             *       {
             *         "id": 2235,
             *         "name": "Green penguin",
             *         "commonDescription": "Green penguin description text"
             *       }
             *     ]
             */
            result?: components["schemas"]["CommonDescription"][] | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        LotFinished: {
            /** @description Lot number. */
            id: number;
            /** @description Internal ID. */
            internalId?: string;
            /** @description New lot ID if the lot is re-listed for repeated auctions. */
            newId?: number;
            /**
             * @description End date and time of auctions in the format 'YYYY-MM-DD HH:MM:SS'.
             *     NA - absence of the end date.
             */
            endDateTime: string;
            /** @description Time zone. */
            TZ: string;
        };
        GetFinishedItemListResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example [
             *       {
             *         "id": 290730300,
             *         "internalId": "s-12949",
             *         "endDateTime": "2025-06-19 11:15:00",
             *         "TZ": "MSK"
             *       }
             *     ]
             */
            result?: components["schemas"]["LotFinished"][] | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        /**
         * @description Auction duration in days.
         *
         *     For auctions, the following values can be accepted: from 3 to 21.
         *     For lots with a fixed price 30 and 100, where 100 means no end date.
         *     Setting without an end date is only available for subscribers on t.p. Seller.
         * @example 7
         * @enum {integer}
         */
        Longevity: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 30 | 100;
        /**
         * @description Payment methods for the lot. One or more payment methods for the lot from the list separated by commas:
         *     - `CASH` - cash;
         *     - `BANK` - bank transfer;
         *     - `NALOZH` - cash on delivery;
         *     - `CARD` - card transfer;
         *     - `YANDEX` - Yandex.Money;
         *     - `GOLDCROWN` - Golden Crown;
         *     - `OZON` - Ozon Safe Deal;
         *     - `SBP` - SBP;
         *     - `WB` - WB Track;
         *     - `MAIL` - mail transfer;
         *     - `PAYPAL` - PayPal;
         *     - `BITCOIN` - Bitcoins;
         *     - `DESC` - details in the description.
         * @example CASH,BANK,CARD,DESC
         */
        Payment: string;
        /**
         * @description Lot condition
         * @enum {string}
         */
        LotCondition: "used" | "new" | "NA";
        LotDelivery: {
            /**
             * @description Is the lot delivered beyond the city:
             *     - `NO` - not delivered;
             *     - `COUNTRY` - delivered by country;
             *     - `WORLD` - delivered by country and the world.
             * @example WORLD
             * @enum {string}
             */
            delivery: "NO" | "COUNTRY" | "WORLD";
            /**
             * @description Delivery to the city (one of the values):
             *     - `SELF` - self-delivery;
             *     - `FREE` - free;
             *     - `CHARGE` - charge.
             * @example CHARGE
             * @enum {string}
             */
            localDelivery: "SELF" | "FREE" | "CHARGE";
            /**
             * @description Cost of delivery to the city.
             *     - `0.00` - please specify the cost of delivery additional;
             *     - Number greater than 0 - cost in the currency of the price.
             * @example 50
             */
            localDeliveryPrice?: number | null;
            /**
             * @description Cost of delivery by country.
             *     - `-1` - free;
             *     - `0.00` - please specify the cost of delivery additional;
             *     - Number greater than 0 - cost in the currency of the price.
             * @example 100
             */
            countryDeliveryPrice?: number | null;
            /**
             * @description Cost of delivery by the world.
             *     - `-1` - free;
             *     - `0.00` - please specify the cost of delivery additional;
             *     - Number greater than 0 - cost in the currency of the price.
             * @example 150
             */
            worldDeliveryPrice?: number | null;
        };
        LotInfoCommonNoDelivery: components["schemas"]["LotDelivery"] & {
            /** @description Lot ID. */
            id: number;
            /** @description Lot name. */
            name: string;
            /** @description Category ID. */
            category: number;
            longevity: components["schemas"]["Longevity"];
            /** @description Date and time of listing the lot for sale in the format 'YYYY-MM-DD HH:MM:SS'. */
            listDateTime: string;
            /**
             * @description End date and time of auctions in the format 'YYYY-MM-DD HH:MM:SS'.
             *     NA - absence of the end date.
             */
            endDateTime: string;
            /** @description Currency ID */
            curencyId: number;
            /** @description Quantity. */
            quantity: number;
            /** @description Tags of the lot separated by commas. */
            tags: string;
            /** @description Numbers of additional parameters of the lot separated by commas. */
            categoryParams: string;
            bold: components["schemas"]["YesOrNo"] & unknown;
            recommended: components["schemas"]["YesOrNo"] & unknown;
            payment: components["schemas"]["Payment"];
            /** @description Minimum buyer rating. Number in the range from 0 to 9. */
            minimalBuyerRate: number;
            condition: components["schemas"]["LotCondition"];
            /** @description Number of lot images. */
            numberOfPictures: number;
            /** @description City ID */
            city: number;
            /**
             * @description Lot status.
             *     deferred - deferred
             *     draft - draft
             *     listed - listed
             *     finished - finished
             *     deleted - deleted
             * @enum {string}
             */
            status: "deferred" | "draft" | "listed" | "finished" | "deleted";
            /** @description New lot ID if the lot is re-listed for repeated auctions. */
            newId?: number;
            /** @description Additional information about delivery and payment. Text up to 1000 characters. */
            deliveryText: string;
            /** @description Lot description. Can be used HTML. */
            description: string;
            /** @description List of identifiers of standard descriptions for the lot separated by commas. */
            commonDescriptions: string;
            /** @description Time zone. */
            TZ: string;
            /** @description Article. Identifier of the lot in your system. */
            internalId?: string;
        };
        LotAuctionInfo: components["schemas"]["LotInfoCommonNoDelivery"] & {
            /**
             * @description Sale type.
             * @enum {string}
             */
            saleType: "Auction";
            /**
             * @description For auctions: starting price.
             * @example 1
             */
            startPrice?: number;
            /**
             * @description For auctions: current price.
             * @example 45.9
             */
            currentPrice?: number;
            /**
             * @description For auctions: price Buy now.
             * @example 250
             */
            strikePrice?: number;
            /**
             * @description For auctions: number of bids.
             * @example 24
             */
            bids: number;
            antisniper?: components["schemas"]["YesOrNo"] & unknown;
            notify?: components["schemas"]["YesOrNo"] & unknown;
            /**
             * @description For auctions: number of prolongations in case of unsuccessful auctions.
             * @example 10
             */
            prolong?: number;
            /**
             * @description For auctions: number of completed prolongations.
             * @example 3
             */
            prolongDone?: number;
        };
        LotFixedInfo: components["schemas"]["LotInfoCommonNoDelivery"] & {
            /**
             * @description Sale type.
             * @enum {string}
             */
            saleType: "Sale";
            /**
             * @description Price - for lots with a fixed price.
             * @example 100
             */
            price?: number;
            bestOffer?: components["schemas"]["YesOrNo"] & unknown;
            /**
             * @description Number of sold copies of the lot for lots with a fixed price.
             * @example 4
             */
            sold?: number;
        };
        GetItemInfoResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example {
             *       "price": 100,
             *       "bestOffer": "Y",
             *       "sold": 0,
             *       "id": 290730300,
             *       "internalId": "s-12949",
             *       "name": "Красный пингвин",
             *       "category": 1488,
             *       "saleType": "Sale",
             *       "longevity": 30,
             *       "listDateTime": "2025-05-20 11:15:00",
             *       "endDateTime": "2025-06-19 11:15:00",
             *       "curencyId": 2,
             *       "quantity": 2,
             *       "tags": "one,two,three",
             *       "categoryParams": "",
             *       "bold": "Y",
             *       "recommended": "Y",
             *       "payment": "CASH,OZON",
             *       "localDelivery": "SELF",
             *       "localDeliveryPrice": 0,
             *       "delivery": "WORLD",
             *       "countryDeliveryPrice": -1,
             *       "worldDeliveryPrice": -1,
             *       "minimalBuyerRate": 3,
             *       "condition": "used",
             *       "numberOfPictures": 1,
             *       "city": 32,
             *       "status": "listed",
             *       "deliveryText": "Add Delivery",
             *       "description": "Cool",
             *       "commonDescriptions": "21504,21505",
             *       "TZ": "MSK"
             *     }
             * @example {
             *       "startPrice": 45,
             *       "currentPrice": 45,
             *       "strikePrice": 5433,
             *       "bids": 0,
             *       "id": 290730308,
             *       "name": "Червяк Анатолий",
             *       "category": 12455,
             *       "saleType": "Auction",
             *       "longevity": 7,
             *       "listDateTime": "2025-06-05 20:32:00",
             *       "endDateTime": "2025-06-12 20:32:00",
             *       "curencyId": 2,
             *       "quantity": 1,
             *       "tags": "",
             *       "categoryParams": "",
             *       "bold": "N",
             *       "recommended": "N",
             *       "payment": "CASH,WB,DESC",
             *       "localDelivery": "SELF",
             *       "localDeliveryPrice": 0,
             *       "delivery": "NO",
             *       "countryDeliveryPrice": 0,
             *       "worldDeliveryPrice": 0,
             *       "minimalBuyerRate": 3,
             *       "condition": "new",
             *       "numberOfPictures": 0,
             *       "city": 32,
             *       "status": "listed",
             *       "deliveryText": "Add Delivery",
             *       "description": "<div class=\"user_content_v1\"><p>WORMS WORLD PARTY!</p></div>",
             *       "commonDescriptions": "",
             *       "TZ": "MSK"
             *     }
             */
            result?: components["schemas"]["LotAuctionInfo"] | components["schemas"]["LotFixedInfo"] | unknown;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        LotOnSaleAuction: {
            /** @description Lot number. */
            id: number;
            /** @description Internal ID. */
            internalId?: string;
            /**
             * @description Sale type.
             * @enum {string}
             */
            saleType: "Auction";
            /** @description Number of bids. */
            bids: number;
            /** @description Current price for auctions. */
            currentPrice: number;
            /** @description Currency ID */
            curencyId: number;
        };
        LotOnSaleFixed: {
            /** @description Lot number. */
            id: number;
            /** @description Internal ID. */
            internalId?: string;
            /**
             * @description Sale type.
             * @enum {string}
             */
            saleType: "Sale";
            /** @description Number of lots. */
            quantity: number;
            /** @description Number of sold lots. */
            sold: number;
            /** @description Price of the lot. */
            price: number;
            /** @description Currency ID */
            curencyId: number;
        };
        LotOnSale: components["schemas"]["LotOnSaleAuction"] | components["schemas"]["LotOnSaleFixed"];
        GetItemListResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example [
             *       {
             *         "id": 290730300,
             *         "internalId": "s-12949",
             *         "saleType": "Sale",
             *         "quantity": 2,
             *         "curencyId": 2,
             *         "price": 100,
             *         "sold": 0
             *       },
             *       {
             *         "id": 290730308,
             *         "internalId": "s-12950",
             *         "saleType": "Auction",
             *         "bids": 0,
             *         "curencyId": 2,
             *         "currentPrice": 100
             *       }
             *     ]
             */
            result?: components["schemas"]["LotOnSale"][] | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        SoldLotFinished: components["schemas"]["LotFinished"] & {
            /** @description Order number. */
            orderId: number;
            /** @description Number of lots in the deal. */
            quantity: number;
            /**
             * @description Flag of the deal status. Possible values:
             *     null - the status of the deal is not defined by the seller;
             *     Y - the deal was successful;
             *     N - the deal was not successful;
             * @enum {string|null}
             */
            happend: "Y" | "N" | null;
        };
        GetSoldFinishedItemListResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example [
             *       {
             *         "orderId": 1234567890,
             *         "quantity": 1,
             *         "happend": "Y",
             *         "id": 290730300,
             *         "internalId": "s-12949",
             *         "endDateTime": "2025-06-19 11:15:00",
             *         "TZ": "MSK"
             *       }
             *     ]
             */
            result?: components["schemas"]["SoldLotFinished"][] | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        GetUnsoldFinishedItemListResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example [
             *       {
             *         "id": 290730300,
             *         "internalId": "s-12949",
             *         "endDateTime": "2025-06-19 11:15:00",
             *         "TZ": "MSK",
             *         "newId": 290730301
             *       }
             *     ]
             */
            result?: components["schemas"]["LotFinished"][] | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        BillingResult: {
            /**
             * @description 0 - the service is not provided;
             *     1 - the service is provided;
             */
            success: number;
            /** @description Text of the error or message about the successful provision of the service in HTML format. */
            html: string;
            /** @description Cost of the service provided in rubles. */
            price: number;
        };
        ListItemResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example {
             *       "id": 290730300,
             *       "endDateTime": "2025-06-19 11:15:00",
             *       "billing": {
             *         "bold": {
             *           "success": 1,
             *           "html": "Услуга Жирный шрифт для лота 290730309 добавлена. С Вашего счета списано 9 р.",
             *           "price": 9
             *         }
             *       },
             *       "TZ": "MSK"
             *     }
             */
            result?: {
                /** @description New lot number. */
                id: number;
                /**
                 * @description End date and time of auctions in the format 'YYYY-MM-DD HH:MM:SS'.
                 *     NA - absence of the end date.
                 */
                endDateTime: string;
                /** @description Information about paid services provided. */
                billing: {
                    bold?: components["schemas"]["BillingResult"];
                    recommended?: components["schemas"]["BillingResult"];
                };
                /** @description Time zone. */
                TZ: string;
            } | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        RelistItemResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example {
             *       "id": 290730301
             *     }
             */
            result?: {
                /** @description Identifier. */
                id: number;
            } | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        StopSaleResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example {
             *       "id": 290730300
             *     }
             */
            result?: {
                /** @description Identifier. */
                id: number;
            } | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        UpdateItemResponse: {
            /**
             * @description User ID.
             * @example 3325567
             */
            account: number;
            /**
             * @description Cost of the request execution.
             * @example 1
             */
            cost: number;
            /**
             * @description Balance after the request execution.
             * @example 29875
             */
            balance: number;
            /**
             * @description Time in seconds until the key expires.
             * @example 882677
             */
            expire: number;
            /**
             * @description Request execution status:
             *     - `1` - successful request execution
             *     - negative values - error
             * @example 1
             */
            success: number;
            /**
             * @example {
             *       "id": 290730300,
             *       "endDateTime": "2025-06-19 11:15:00",
             *       "billing": {
             *         "bold": {
             *           "success": 1,
             *           "html": "Услуга Жирный шрифт для лота 290730309 добавлена. С Вашего счета списано 9 р.",
             *           "price": 9
             *         }
             *       },
             *       "TZ": "MSK"
             *     }
             */
            result?: {
                /** @description New lot number. */
                id: number;
                /**
                 * @description End date and time of auctions in the format 'YYYY-MM-DD HH:MM:SS'.
                 *     NA - absence of the end date.
                 */
                endDateTime: string;
                /** @description Information about paid services provided. */
                billing: {
                    bold?: components["schemas"]["BillingResult"];
                    recommended?: components["schemas"]["BillingResult"];
                };
                /** @description Time zone. */
                TZ: string;
            } | null;
            /** @description Error text. */
            error?: string | null;
            /** @description Additional error data. */
            errorDetails?: {
                [key: string]: unknown;
            } | null;
        };
        GetCategoryInfoRequest: {
            /** @description Category ID */
            id: number | null;
        };
        GetCitiesListRequest: {
            /** @description Country ID */
            id: number | null;
        };
        GetSubCategoryRequest: {
            /** @description Parent category ID */
            id: number | null;
        };
        DeleteItemRequest: {
            /** @description Lot number. */
            id: number | null;
        };
        GetCommonDescriptionListRequest: Record<string, never>;
        GetFinishedItemListRequest: Record<string, never>;
        GetItemInfoRequest: {
            /** @description Lot ID. */
            id: number;
        };
        GetItemListRequest: Record<string, never>;
        GetSoldFinishedItemListRequest: Record<string, never>;
        GetUnsoldFinishedItemListRequest: Record<string, never>;
        NewLotCommon: components["schemas"]["LotDelivery"] & {
            /** @description Lot name. */
            name: string;
            /** @description Category number */
            category: number | null;
            longevity: components["schemas"]["Longevity"];
            /**
             * @description Date and time of listing the lot for sale in the format 'YYYY-MM-DD HH:MM:SS'.
             *     Lots that are accepted for placement are those whose placement date is no more than 30 days from the current time.
             */
            listDateTime?: string;
            /** @description Currency ID */
            curencyId: number | null;
            /** @description Tags of the lot separated by commas. */
            tags?: string;
            /** @description Numbers of additional parameters of the lot separated by commas. */
            categoryParams?: string;
            bold?: components["schemas"]["YesOrNo"] & unknown;
            recommended?: components["schemas"]["YesOrNo"] & unknown;
            payment: components["schemas"]["Payment"];
            /** @description Minimum buyer rating. Number in the range from 0 to 9. */
            minimalBuyerRate?: number | null;
            condition?: components["schemas"]["LotCondition"];
            /** @description List of URLs of the lot images separated by commas. */
            pictures?: string;
            /** @description City ID */
            city: number | null;
            /** @description Additional information about delivery and payment. Text up to 1000 characters. */
            deliveryText?: string;
            /** @description Description of the lot. Can be used HTML. */
            description: string;
            /** @description List of identifiers of standard descriptions for the lot separated by commas. */
            commonDescriptions?: string;
            /** @description Article. Identifier of the lot in your system. */
            internalId?: string;
        };
        NewLotSale: components["schemas"]["NewLotCommon"] & {
            /**
             * @description Sale type.
             * @enum {string}
             */
            saleType: "Sale";
            bestOffer?: components["schemas"]["YesOrNo"] & unknown;
            /** @description For lots with a fixed price: Quantity. */
            quantity: number | null;
            /** @description For lots with a fixed price: Price. */
            price: number | null;
        } & {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            saleType: "Sale";
        };
        NewLotAuction: components["schemas"]["NewLotCommon"] & {
            /**
             * @description Sale type.
             * @enum {string}
             */
            saleType: "Auction";
            antisniper?: components["schemas"]["YesOrNo"] & unknown;
            notify?: components["schemas"]["YesOrNo"] & unknown;
            /** @description For auctions: number of prolongations in case of unsuccessful auctions. */
            prolong?: number | null;
            /** @description For auctions: initial price. */
            startPrice: number | null;
            /** @description For auctions: price Buy now. */
            strikePrice?: number | null;
        } & {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            saleType: "Auction";
        };
        ListItemRequest: components["schemas"]["NewLotSale"] | components["schemas"]["NewLotAuction"];
        RelistItemRequest: {
            /** @description Lot number. */
            id: number | null;
        };
        StopSaleRequest: {
            /** @description Lot number. */
            id: number | null;
        };
        UpdateLotCommon: {
            /**
             * @description Is the lot delivered beyond the city:
             *     - `NO` - not delivered;
             *     - `COUNTRY` - delivered by country;
             *     - `WORLD` - delivered by country and the world.
             * @example WORLD
             * @enum {string}
             */
            delivery?: "NO" | "COUNTRY" | "WORLD";
            /**
             * @description Delivery to the city (one of the values):
             *     - `SELF` - self-delivery;
             *     - `FREE` - free;
             *     - `CHARGE` - charge.
             * @example CHARGE
             * @enum {string}
             */
            localDelivery?: "SELF" | "FREE" | "CHARGE";
            /**
             * @description Cost of delivery to the city.
             *     - `0.00` - please specify the cost of delivery additional;
             *     - Number greater than 0 - cost in the currency of the price.
             * @example 50
             */
            localDeliveryPrice?: number | null;
            /**
             * @description Cost of delivery by country.
             *     - `-1` - free;
             *     - `0.00` - please specify the cost of delivery additional;
             *     - Number greater than 0 - cost in the currency of the price.
             * @example 100
             */
            countryDeliveryPrice?: number | null;
            /**
             * @description Cost of delivery by the world.
             *     - `-1` - free;
             *     - `0.00` - please specify the cost of delivery additional;
             *     - Number greater than 0 - cost in the currency of the price.
             * @example 150
             */
            worldDeliveryPrice?: number | null;
            /** @description Lot number. */
            id: number | null;
            /** @description Lot name. */
            name?: string;
            /** @description Category number */
            category?: number | null;
            longevity?: components["schemas"]["Longevity"];
            /** @description Currency ID */
            curencyId?: number | null;
            /** @description Tags of the lot separated by commas. */
            tags?: string;
            /** @description Numbers of additional parameters of the lot separated by commas. */
            categoryParams?: string;
            bold?: components["schemas"]["YesOrNo"] & unknown;
            recommended?: components["schemas"]["YesOrNo"] & unknown;
            payment?: components["schemas"]["Payment"];
            /** @description Minimum buyer rating. Number in the range from 0 to 9. */
            minimalBuyerRate?: number | null;
            condition?: components["schemas"]["LotCondition"];
            /** @description List of URLs of the lot images separated by commas. */
            pictures?: string;
            /** @description City ID */
            city?: number | null;
            /** @description Additional information about delivery and payment. Text up to 1000 characters. */
            deliveryText?: string;
            /** @description Description of the lot. Can be used HTML. */
            description?: string;
            /** @description List of identifiers of standard descriptions for the lot separated by commas. */
            commonDescriptions?: string;
            /** @description Article. Identifier of the lot in your system. */
            internalId?: string;
        };
        UpdateSaleAuction: components["schemas"]["UpdateLotCommon"] & {
            /**
             * @description Sale type.
             * @enum {string}
             */
            saleType?: "Sale";
            bestOffer?: components["schemas"]["YesOrNo"] & unknown;
            /** @description For lots with a fixed price: Quantity. */
            quantity?: number | null;
            /** @description For lots with a fixed price: Price. */
            price?: number | null;
        };
        UpdateLotAuction: components["schemas"]["UpdateLotCommon"] & {
            /**
             * @description Sale type.
             * @enum {string}
             */
            saleType?: "Auction";
            antisniper?: components["schemas"]["YesOrNo"] & unknown;
            notify?: components["schemas"]["YesOrNo"] & unknown;
            /** @description For auctions: number of prolongations in case of unsuccessful auctions. */
            prolong?: number | null;
            /** @description For auctions: initial price. */
            startPrice?: number | null;
            /** @description For auctions: price Buy now. */
            strikePrice?: number | null;
        };
        UpdateItemRequest: components["schemas"]["UpdateSaleAuction"] | components["schemas"]["UpdateLotAuction"];
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
