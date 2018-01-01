export default class View {

    static template() {
        return "\n" +
            "<div class=\"trade_container dark hide\">\n" +
            "        <div class=\"m_cent\">\n" +
            "            <div class=\"m_guadan\">\n" +
            "                <div class=\"symbol-title\">\n" +
            "                    <a class=\"dark\">test</a>\n" +
            "                    \n" +
            "                </div>\n" +
            "                <div id=\"orderbook\">\n" +
            "                    <div id=\"asks\">\n" +
            "                        <div class=\"table\"> </div>\n" +
            "                   </div>\n" +
            "                   <div id=\"gasks\">\n" +
            "                        <div class=\"table\"> </div>\n" +
            "                   </div>\n" +
            "                   <div id=\"price\" class=\"green\"></div>\n" +
            "                   <div id=\"bids\">\n" +
            "                        <div class=\"table\"> </div>\n" +
            "                    </div>\n" +
            "                    <div id=\"gbids\">\n" +
            "                        <div class=\"table\"> </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div id=\"trades\" class=\"trades\">\n" +
            "                <div class=\"trades_list\"> </div>\n" +
            "                </div>\n" +
            "            \n" +
            "            </div>\n" +
            "        \n" +
            "        </div>\n" +
            "</div>\n" +

            "<div class=\"chart_container dark\">\n" +
            "            <div id=\"chart_dom_elem_cache\"></div>\n" +
            "            <!-- ToolBar -->\n" +
            "            <div id=\"chart_toolbar\">\n" +
            "                <div class=\"chart_toolbar_minisep\"></div>\n" +
            "                <!-- Periods -->\n" +
            "                <div class=\"chart_dropdown\" id=\"chart_toolbar_periods_vert\">\n" +
            "                    <div class=\"chart_dropdown_t\"><a class=\"chart_str_period\">周期</a></div>\n" +
            "                    <div class=\"chart_dropdown_data\" style=\"margin-left: -58px;\">\n" +
            "                        <table>\n" +
            "                            <tbody>\n" +
            "                            <tr>\n" +
            "                                <td>\n" +
            "                                    <ul>\n" +
            "                                        <li id=\"chart_period_1w_v\" style=\"display:none;\" name=\"1w\"><a class=\"chart_str_period_1w\">周线</a></li>\n" +
            "                                        <li id=\"chart_period_3d_v\" style=\"display:none;\" name=\"3d\"><a class=\"chart_str_period_3d\">3日</a></li>\n" +
            "                                        <li id=\"chart_period_1d_v\" style=\"display:none;\" name=\"1d\"><a class=\"chart_str_period_1d\">日线</a></li>\n" +
            "                                        <li id=\"chart_period_12h_v\" style=\"display:none;\" name=\"12h\"><a class=\"chart_str_period_12h\">12小时</a></li>\n" +
            "                                        <li id=\"chart_period_6h_v\" style=\"display:none;\" name=\"6h\"><a class=\"chart_str_period_6h\">6小时</a></li>\n" +
            "                                        <li id=\"chart_period_4h_v\" style=\"display:none;\" name=\"4h\"><a class=\"chart_str_period_4h\">4小时</a></li>\n" +
            "                                        <li id=\"chart_period_2h_v\" style=\"display:none;\" name=\"2h\"><a class=\"chart_str_period_2h\">2小时</a></li>\n" +
            "                                        <li id=\"chart_period_1h_v\" style=\"display:none;\" name=\"1h\"><a class=\"chart_str_period_1h\">1小时</a></li>\n" +
            "                                    </ul>\n" +
            "                                </td>\n" +
            "                            </tr>\n" +
            "                            <tr>\n" +
            "                                <td>\n" +
            "                                    <ul>\n" +
            "                                        <li id=\"chart_period_30m_v\" style=\"display:none;\" name=\"30m\"><a class=\"chart_str_period_30m\">30分钟</a></li>\n" +
            "                                        <li id=\"chart_period_15m_v\" style=\"display:none;\" name=\"15m\"><a class=\"chart_str_period_15m\">15分钟</a></li>\n" +
            "                                        <li id=\"chart_period_5m_v\" style=\"display:none;\" name=\"5m\"><a class=\"chart_str_period_5m\">5分钟</a></li>\n" +
            "                                        <li id=\"chart_period_3m_v\" style=\"display:none;\" name=\"3m\"><a class=\"chart_str_period_3m\">3分钟</a></li>\n" +
            "                                        <li id=\"chart_period_1m_v\" style=\"display:none;\" name=\"1m\"><a class=\"chart_str_period_1m selected\">1分钟</a></li>\n" +
            "                                        <li id=\"chart_period_line_v\" style=\"display:none;\" name=\"line\"><a class=\"chart_str_period_line\">分时</a>\n" +
            "                                        </li>\n" +
            "                                    </ul>\n" +
            "                                </td>\n" +
            "                            </tr>\n" +
            "                            </tbody>\n" +
            "                        </table>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div id=\"chart_toolbar_periods_horz\">\n" +
            "                    <ul class=\"chart_toolbar_tabgroup\" style=\"padding-left:5px; padding-right:11px;\">\n" +
            "                        <li id=\"chart_period_1w_h\" name=\"1w\" style=\"display: none;\"><a\ class=\"chart_str_period_1w\">周线</a></li>\n" +
            "                        <li id=\"chart_period_3d_h\" name=\"3d\" style=\"display: none;\"><a\ class=\"chart_str_period_3d\">3日</a></li>\n" +
            "                        <li id=\"chart_period_1d_h\" name=\"1d\" style=\"display: none;\"><a class=\"chart_str_period_1d\">日线</a></li>\n" +
            "                        <li id=\"chart_period_12h_h\" name=\"12h\" style=\"display: none;\"><a class=\"chart_str_period_12h\">12小时</a></li>\n" +
            "                        <li id=\"chart_period_6h_h\" name=\"6h\" style=\"display: none;\"><a class=\"chart_str_period_6h\">6小时</a></li>\n" +
            "                        <li id=\"chart_period_4h_h\" name=\"4h\" style=\"display: none;\"><a class=\"chart_str_period_4h\">4小时</a></li>\n" +
            "                        <li id=\"chart_period_2h_h\" name=\"2h\" style=\"display: none;\"><a class=\"chart_str_period_2h\">2小时</a></li>\n" +
            "                        <li id=\"chart_period_1h_h\" name=\"1h\" style=\"display: none;\"><a class=\"chart_str_period_1h\">1小时</a></li>\n" +
            "                        <li id=\"chart_period_30m_h\" name=\"30m\" style=\"display: none;\"><a class=\"chart_str_period_30m\">30分钟</a></li>\n" +
            "                        <li id=\"chart_period_15m_h\" name=\"15m\" style=\"display: none;\"><a class=\"chart_str_period_15m\">15分钟</a></li>\n" +
            "                        <li id=\"chart_period_5m_h\" name=\"5m\" style=\"display: none;\"><a class=\"chart_str_period_5m\">5分钟</a></li>\n" +
            "                        <li id=\"chart_period_3m_h\" name=\"3m\" style=\"display: none;\"><a class=\"chart_str_period_3m\">3分钟</a></li>\n" +
            "                        <li id=\"chart_period_1m_h\" name=\"1m\" style=\"display: none;\"><a class=\"chart_str_period_1m selected\">1分钟</a></li>\n" +
            "                        <li id=\"chart_period_line_h\" name=\"line\" style=\"display: none;\"><a class=\"chart_str_period_line\">分时</a></li>\n" +
            "                    </ul>\n" +
            "                </div>\n" +
            "                <div id=\"chart_show_indicator\" class=\"chart_toolbar_button chart_str_indicator_cap selected\">技术指标</div>\n" +
            "                <div id=\"chart_show_tools\" class=\"chart_toolbar_button chart_str_tools_cap\">画线工具</div>\n" +
            "                <div id=\"chart_toolbar_theme\">\n" +
            "                    <div class=\"chart_toolbar_label chart_str_theme_cap\">主题选择</div>\n" +
            "                    <a name=\"dark\" class=\"chart_icon chart_icon_theme_dark selected\"></a>\n" +
            "                    <a name=\"light\" class=\"chart_icon chart_icon_theme_light\"></a>\n" +
            "                </div>\n" +
            "                <div class=\"chart_dropdown\" id=\"chart_dropdown_settings\">\n" +
            "                    <div class=\"chart_dropdown_t\"><a class=\"chart_str_settings\">更多</a></div>\n" +
            "                    <div class=\"chart_dropdown_data\" style=\"margin-left: -142px;\">\n" +
            "                        <table>\n" +
            "                            <tbody>\n" +
            "                            <tr id=\"chart_select_main_indicator\">\n" +
            "                                <td class=\"chart_str_main_indicator\">主指标</td>\n" +
            "                                <td>\n" +
            "                                    <ul>\n" +
            "                                        <li><a name=\"MA\" class=\"selected\">MA</a></li>\n" +
            "                                        <li><a name=\"EMA\" class=\"\">EMA</a></li>\n" +
            "                                        <li><a name=\"BOLL\" class=\"\">BOLL</a></li>\n" +
            "                                        <li><a name=\"SAR\" class=\"\">SAR</a></li>\n" +
            "                                        <li><a name=\"NONE\" class=\"\">None</a></li>\n" +
            "                                    </ul>\n" +
            "                                </td>\n" +
            "                            </tr>\n" +
            "                            <tr id=\"chart_select_chart_style\">\n" +
            "                                <td class=\"chart_str_chart_style\">主图样式</td>\n" +
            "                                <td>\n" +
            "                                    <ul>\n" +
            "                                        <li><a class=\"selected\">CandleStick</a></li>\n" +
            "                                        <li><a>CandleStickHLC</a></li>\n" +
            "                                        <li><a class=\"\">OHLC</a></li>\n" +
            "                                    </ul>\n" +
            "                                </td>\n" +
            "                            </tr>\n" +
            "                            <tr id=\"chart_select_theme\" style=\"display: none;\">\n" +
            "                                <td class=\"chart_str_theme\">主题选择</td>\n" +
            "                                <td>\n" +
            "                                    <ul>\n" +
            "                                        <li>\n" +
            "                                            <a name=\"dark\" class=\"chart_icon chart_icon_theme_dark selected\"></a>\n" +
            "                                        </li>\n" +
            "                                        <li>\n" +
            "                                            <a name=\"light\" class=\"chart_icon chart_icon_theme_light\"></a>\n" +
            "                                        </li>\n" +
            "                                    </ul>\n" +
            "                                </td>\n" +
            "                            </tr>\n" +
            "                            <tr id=\"chart_enable_tools\" style=\"display: none;\">\n" +
            "                                <td class=\"chart_str_tools\">画线工具</td>\n" +
            "                                <td>\n" +
            "                                    <ul>\n" +
            "                                        <li><a name=\"on\" class=\"chart_str_on\">开启</a></li>\n" +
            "                                        <li><a name=\"off\" class=\"chart_str_off selected\">关闭</a></li>\n" +
            "                                    </ul>\n" +
            "                                </td>\n" +
            "                            </tr>\n" +
            "                            <tr id=\"chart_enable_indicator\" style=\"display: none;\">\n" +
            "                                <td class=\"chart_str_indicator\">技术指标</td>\n" +
            "                                <td>\n" +
            "                                    <ul>\n" +
            "                                        <li><a name=\"on\" class=\"chart_str_on selected\">开启</a></li>\n" +
            "                                        <li><a name=\"off\" class=\"chart_str_off\">关闭</a></li>\n" +
            "                                    </ul>\n" +
            "                                </td>\n" +
            "                            </tr>\n" +
            "                            <tr>\n" +
            "                                <td></td>\n" +
            "                                <td>\n" +
            "                                    <ul>\n" +
            "                                        <li><a id=\"chart_btn_parameter_settings\"\n" +
            "                                               class=\"chart_str_indicator_parameters\">指标参数设置</a>\n" +
            "                                        </li>\n" +
            "                                    </ul>\n" +
            "                                </td>\n" +
            "                            </tr>\n" +
            "                            </tbody>\n" +
            "                        </table>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_dropdown\" id=\"chart_language_setting_div\" style=\"padding-left: 5px;\">\n" +
            "                    <div class=\"chart_dropdown_t\">\n" +
            "                        <a class=\"chart_language_setting\">语言(LANG)</a>\n" +
            "                    </div>\n" +
            "                    <div class=\"chart_dropdown_data\" style=\"padding-top: 15px; margin-left: -12px;\">\n" +
            "                        <ul>\n" +
            "                            <li style=\"height: 25px;\"><a name=\"zh-cn\" class=\"selected\">简体中文(zh-CN)</a></li>\n" +
            "                            <li style=\"height: 25px;\"><a name=\"en-us\">English(en-US)</a></li>\n" +
            "                            <li style=\"height: 25px;\"><a name=\"zh-tw\">繁體中文(zh-HK)</a></li>\n" +
            "                        </ul>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div id=\"chart_updated_time\">\n" +
            "                    <div id=\"sizeIcon\" class=\"chart_BoxSize\"></div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <!-- ToolPanel -->\n" +
            "            <div id=\"chart_toolpanel\">\n" +
            "                <div class=\"chart_toolpanel_separator\"></div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_Cursor\" name=\"Cursor\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_cursor\">光标</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_CrossCursor\" name=\"CrossCursor\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_cross_cursor\">十字光标</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_SegLine\" name=\"SegLine\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_seg_line\">线段</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_StraightLine\" name=\"StraightLine\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_straight_line\">直线</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_RayLine\" name=\"RayLine\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_ray_line\">射线</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_ArrowLine\" name=\"ArrowLine\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_arrow_line\">箭头</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_HoriSegLine\" name=\"HoriSegLine\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_horz_seg_line\">水平线段</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_HoriStraightLine\" name=\"HoriStraightLine\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_horz_straight_line\">水平直线</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_HoriRayLine\" name=\"HoriRayLine\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_horz_ray_line\">水平射线</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_VertiStraightLine\" name=\"VertiStraightLine\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_vert_straight_line\">垂直直线</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_PriceLine\" name=\"PriceLine\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_price_line\">价格线</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_TriParallelLine\" name=\"TriParallelLine\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_tri_parallel_line\">价格通道线</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_BiParallelLine\" name=\"BiParallelLine\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_bi_parallel_line\">平行直线</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_BiParallelRayLine\" name=\"BiParallelRayLine\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_bi_parallel_ray\">平行射线</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_DrawFibRetrace\" name=\"DrawFibRetrace\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_fib_retrace\">斐波纳契回调</div>\n" +
            "                </div>\n" +
            "                <div class=\"chart_toolpanel_button\">\n" +
            "                    <div class=\"chart_toolpanel_icon\" id=\"chart_DrawFibFans\" name=\"DrawFibFans\"></div>\n" +
            "                    <div class=\"chart_toolpanel_tip chart_str_fib_fans\">斐波纳契扇形</div>\n" +
            "                </div>\n" +
            "                <div style=\"padding-left: 3px;padding-top: 10px;\">\n" +
            "                    <button style=\"color: red;\" id=\"clearCanvas\" title=\"Clear All\">X</button>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <!-- Canvas Group -->\n" +
            "            <div id=\"chart_canvasGroup\" class=\"temp\">\n" +
            "                <canvas class=\"chart_canvas\" id=\"chart_mainCanvas\"\n" +
            "                        style=\"cursor: default;\"></canvas>\n" +
            "                <canvas class=\"chart_canvas\" id=\"chart_overlayCanvas\"\n" +
            "                        style=\"cursor: default;\"></canvas>\n" +
            "            </div>\n" +
            "            <!-- TabBar -->\n" +
            "            <div id=\"chart_tabbar\"\">\n" +
            "                <ul>\n" +
            "                    <li><a name=\"MACD\" class=\"\">MACD</a></li>\n" +
            "                    <li><a name=\"KDJ\" class=\"\">KDJ</a></li>\n" +
            "                    <li><a name=\"StochRSI\" class=\"\">StochRSI</a></li>\n" +
            "                    <li><a name=\"RSI\" class=\"\">RSI</a></li>\n" +
            "                    <li><a name=\"DMI\" class=\"\">DMI</a></li>\n" +
            "                    <li><a name=\"OBV\" class=\"\">OBV</a></li>\n" +
            "                    <li><a name=\"BOLL\" class=\"\">BOLL</a></li>\n" +
            "                    <li><a name=\"SAR\" class=\"\">SAR</a></li>\n" +
            "                    <li><a name=\"DMA\" class=\"\">DMA</a></li>\n" +
            "                    <li><a name=\"TRIX\" class=\"\">TRIX</a></li>\n" +
            "                    <li><a name=\"BRAR\" class=\"\">BRAR</a></li>\n" +
            "                    <li><a name=\"VR\" class=\"\">VR</a></li>\n" +
            "                    <li><a name=\"EMV\" class=\"\">EMV</a></li>\n" +
            "                    <li><a name=\"WR\" class=\"\">WR</a></li>\n" +
            "                    <li><a name=\"ROC\" class=\"\">ROC</a></li>\n" +
            "                    <li><a name=\"MTM\" class=\"\">MTM</a></li>\n" +
            "                    <li><a name=\"PSY\">PSY</a></li>\n" +
            "                </ul>\n" +
            "            </div>\n" +
            "            <!-- Parameter Settings -->\n" +
            "            <div id=\"chart_parameter_settings\">\n" +
            "                <h2 class=\"chart_str_indicator_parameters\">指标参数设置</h2>\n" +
            "                <table>\n" +
            "                    <tbody>\n" +
            "                    <tr>\n" +
            "                        <th>MA</th>\n" +
            "                        <td><input name=\"MA\"><input name=\"MA\"><input name=\"MA\"><input name=\"MA\"><br><input\n" +
            "                                name=\"MA\"><input\n" +
            "                                name=\"MA\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                        <th>DMA</th>\n" +
            "                        <td><input name=\"DMA\"><input name=\"DMA\"><input name=\"DMA\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <th>EMA</th>\n" +
            "                        <td><input name=\"EMA\"><input name=\"EMA\"><input name=\"EMA\"><input name=\"EMA\"><br><input\n" +
            "                                name=\"EMA\"><input name=\"EMA\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                        <th>TRIX</th>\n" +
            "                        <td><input name=\"TRIX\"><input name=\"TRIX\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <th>VOLUME</th>\n" +
            "                        <td><input name=\"VOLUME\"><input name=\"VOLUME\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                        <th>BRAR</th>\n" +
            "                        <td><input name=\"BRAR\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <th>MACD</th>\n" +
            "                        <td><input name=\"MACD\"><input name=\"MACD\"><input name=\"MACD\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                        <th>VR</th>\n" +
            "                        <td><input name=\"VR\"><input name=\"VR\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <th>KDJ</th>\n" +
            "                        <td><input name=\"KDJ\"><input name=\"KDJ\"><input name=\"KDJ\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                        <th>EMV</th>\n" +
            "                        <td><input name=\"EMV\"><input name=\"EMV\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <th>StochRSI</th>\n" +
            "                        <td><input name=\"StochRSI\"><input name=\"StochRSI\"><input name=\"StochRSI\"><input name=\"StochRSI\">\n" +
            "                        </td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                        <th>WR</th>\n" +
            "                        <td><input name=\"WR\"><input name=\"WR\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <th>RSI</th>\n" +
            "                        <td><input name=\"RSI\"><input name=\"RSI\"><input name=\"RSI\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                        <th>ROC</th>\n" +
            "                        <td><input name=\"ROC\"><input name=\"ROC\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <th>DMI</th>\n" +
            "                        <td><input name=\"DMI\"><input name=\"DMI\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                        <th>MTM</th>\n" +
            "                        <td><input name=\"MTM\"><input name=\"MTM\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <th>OBV</th>\n" +
            "                        <td><input name=\"OBV\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                        <th>PSY</th>\n" +
            "                        <td><input name=\"PSY\"><input name=\"PSY\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <th>BOLL</th>\n" +
            "                        <td><input name=\"BOLL\"></td>\n" +
            "                        <td>\n" +
            "                            <button class=\"chart_str_default\">默认值</button>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    </tbody>\n" +
            "                </table>\n" +
            "                <div id=\"close_settings\"><a class=\"chart_str_close\">关闭</a></div>\n" +
            "            </div>\n" +
            "            <!-- Loading -->\n" +
            "            <div id=\"chart_loading\" class=\"chart_str_loading\">正在读取数据...</div>\n" +
            "        </div>\n" +
            "        <div style=\"display: none\" id=\"chart_language_switch_tmp\">\n" +
            "            <span name=\"chart_str_period\" zh_tw=\"週期\" zh_cn=\"周期\" en_us=\"TIME\"></span>\n" +
            "            <span name=\"chart_str_period_line\" zh_tw=\"分時\" zh_cn=\"分时\" en_us=\"Line\"></span>\n" +
            "            <span name=\"chart_str_period_1m\" zh_tw=\"1分鐘\" zh_cn=\"1分钟\" en_us=\"1m\"></span>\n" +
            "            <span name=\"chart_str_period_3m\" zh_tw=\"3分鐘\" zh_cn=\"3分钟\" en_us=\"3m\"></span>\n" +
            "            <span name=\"chart_str_period_5m\" zh_tw=\"5分鐘\" zh_cn=\"5分钟\" en_us=\"5m\"></span>\n" +
            "            <span name=\"chart_str_period_15m\" zh_tw=\"15分鐘\" zh_cn=\"15分钟\" en_us=\"15m\"></span>\n" +
            "            <span name=\"chart_str_period_30m\" zh_tw=\"30分鐘\" zh_cn=\"30分钟\" en_us=\"30m\"></span>\n" +
            "            <span name=\"chart_str_period_1h\" zh_tw=\"1小時\" zh_cn=\"1小时\" en_us=\"1h\"></span>\n" +
            "            <span name=\"chart_str_period_2h\" zh_tw=\"2小時\" zh_cn=\"2小时\" en_us=\"2h\"></span>\n" +
            "            <span name=\"chart_str_period_4h\" zh_tw=\"4小時\" zh_cn=\"4小时\" en_us=\"4h\"></span>\n" +
            "            <span name=\"chart_str_period_6h\" zh_tw=\"6小時\" zh_cn=\"6小时\" en_us=\"6h\"></span>\n" +
            "            <span name=\"chart_str_period_12h\" zh_tw=\"12小時\" zh_cn=\"12小时\" en_us=\"12h\"></span>\n" +
            "            <span name=\"chart_str_period_1d\" zh_tw=\"日線\" zh_cn=\"日线\" en_us=\"1d\"></span>\n" +
            "            <span name=\"chart_str_period_3d\" zh_tw=\"3日\" zh_cn=\"3日\" en_us=\"3d\"></span>\n" +
            "            <span name=\"chart_str_period_1w\" zh_tw=\"周線\" zh_cn=\"周线\" en_us=\"1w\"></span>\n" +
            "\n" +
            "            <span name=\"chart_str_settings\" zh_tw=\"更多\" zh_cn=\"更多\" en_us=\"MORE\"></span>\n" +
            "            <span name=\"chart_setting_main_indicator\" zh_tw=\"均線設置\" zh_cn=\"均线设置\" en_us=\"Main Indicator\"></span>\n" +
            "            <span name=\"chart_setting_main_indicator_none\" zh_tw=\"關閉均線\" zh_cn=\"关闭均线\" en_us=\"None\"></span>\n" +
            "            <span name=\"chart_setting_indicator_parameters\" zh_tw=\"指標參數設置\" zh_cn=\"指标参数设置\"\n" +
            "                  en_us=\"Indicator Parameters\"></span>\n" +
            "\n" +
            "            <span name=\"chart_str_chart_style\" zh_tw=\"主圖樣式\" zh_cn=\"主图样式\" en_us=\"Chart Style\"></span>\n" +
            "            <span name=\"chart_str_main_indicator\" zh_tw=\"主指標\" zh_cn=\"主指标\" en_us=\"Main Indicator\"></span>\n" +
            "            <span name=\"chart_str_indicator\" zh_tw=\"技術指標\" zh_cn=\"技术指标\" en_us=\"Indicator\"></span>\n" +
            "            <span name=\"chart_str_indicator_cap\" zh_tw=\"技術指標\" zh_cn=\"技术指标\" en_us=\"INDICATOR\"></span>\n" +
            "            <span name=\"chart_str_tools\" zh_tw=\"畫線工具\" zh_cn=\"画线工具\" en_us=\"Tools\"></span>\n" +
            "            <span name=\"chart_str_tools_cap\" zh_tw=\"畫線工具\" zh_cn=\"画线工具\" en_us=\"TOOLS\"></span>\n" +
            "            <span name=\"chart_str_theme\" zh_tw=\"主題選擇\" zh_cn=\"主题选择\" en_us=\"Theme\"></span>\n" +
            "            <span name=\"chart_str_theme_cap\" zh_tw=\"主題選擇\" zh_cn=\"主题选择\" en_us=\"THEME\"></span>\n" +
            "\n" +
            "            <span name=\"chart_language_setting\" zh_tw=\"語言(LANG)\" zh_cn=\"语言(LANG)\" en_us=\"LANGUAGE\"></span>\n" +
            "            <span name=\"chart_exchanges_setting\" zh_tw=\"更多市場\" zh_cn=\"更多市场\" en_us=\"MORE MARKETS\"></span>\n" +
            "            <span name=\"chart_othercoin_setting\" zh_tw=\"其它市場\" zh_cn=\"其它市场\" en_us=\"OTHER MARKETS\"></span>\n" +
            "\n" +
            "\n" +
            "            <span name=\"chart_str_none\" zh_tw=\"關閉\" zh_cn=\"关闭\" en_us=\"None\"></span>\n" +
            "\n" +
            "            <span name=\"chart_str_theme_dark\" zh_tw=\"深色主題\" zh_cn=\"深色主题\" en_us=\"Dark\"></span>\n" +
            "            <span name=\"chart_str_theme_light\" zh_tw=\"淺色主題\" zh_cn=\"浅色主题\" en_us=\"Light\"></span>\n" +
            "\n" +
            "            <span name=\"chart_str_on\" zh_tw=\"開啟\" zh_cn=\"开启\" en_us=\"On\"></span>\n" +
            "            <span name=\"chart_str_off\" zh_tw=\"關閉\" zh_cn=\"关闭\" en_us=\"Off\"></span>\n" +
            "\n" +
            "            <span name=\"chart_str_close\" zh_tw=\"關閉\" zh_cn=\"关闭\" en_us=\"CLOSE\"></span>\n" +
            "            <span name=\"chart_str_default\" zh_tw=\"默認值\" zh_cn=\"默认值\" en_us=\"default\"></span>\n" +
            "\n" +
            "            <span name=\"chart_str_loading\" zh_tw=\"正在讀取數據...\" zh_cn=\"正在读取数据...\" en_us=\"Loading...\"></span>\n" +
            "\n" +
            "            <span name=\"chart_str_indicator_parameters\" zh_tw=\"指標參數設置\" zh_cn=\"指标参数设置\"\n" +
            "                  en_us=\"Indicator Parameters\"></span>\n" +
            "\n" +
            "            <span name=\"chart_str_cursor\" zh_tw=\"光標\" zh_cn=\"光标\" en_us=\"Cursor\"></span>\n" +
            "            <span name=\"chart_str_cross_cursor\" zh_tw=\"十字光標\" zh_cn=\"十字光标\" en_us=\"Cross Cursor\"></span>\n" +
            "            <span name=\"chart_str_seg_line\" zh_tw=\"線段\" zh_cn=\"线段\" en_us=\"Trend Line\"></span>\n" +
            "            <span name=\"chart_str_straight_line\" zh_tw=\"直線\" zh_cn=\"直线\" en_us=\"Extended\"></span>\n" +
            "            <span name=\"chart_str_ray_line\" zh_tw=\"射線\" zh_cn=\"射线\" en_us=\"Ray\"></span>\n" +
            "            <span name=\"chart_str_arrow_line\" zh_tw=\"箭頭\" zh_cn=\"箭头\" en_us=\"Arrow\"></span>\n" +
            "            <span name=\"chart_str_horz_seg_line\" zh_tw=\"水平線段\" zh_cn=\"水平线段\" en_us=\"Horizontal Line\"></span>\n" +
            "            <span name=\"chart_str_horz_straight_line\" zh_tw=\"水平直線\" zh_cn=\"水平直线\" en_us=\"Horizontal Extended\"></span>\n" +
            "            <span name=\"chart_str_horz_ray_line\" zh_tw=\"水平射線\" zh_cn=\"水平射线\" en_us=\"Horizontal Ray\"></span>\n" +
            "            <span name=\"chart_str_vert_straight_line\" zh_tw=\"垂直直線\" zh_cn=\"垂直直线\" en_us=\"Vertical Extended\"></span>\n" +
            "            <span name=\"chart_str_price_line\" zh_tw=\"價格線\" zh_cn=\"价格线\" en_us=\"Price Line\"></span>\n" +
            "            <span name=\"chart_str_tri_parallel_line\" zh_tw=\"價格通道線\" zh_cn=\"价格通道线\" en_us=\"Parallel Channel\"></span>\n" +
            "            <span name=\"chart_str_bi_parallel_line\" zh_tw=\"平行直線\" zh_cn=\"平行直线\" en_us=\"Parallel Lines\"></span>\n" +
            "            <span name=\"chart_str_bi_parallel_ray\" zh_tw=\"平行射線\" zh_cn=\"平行射线\" en_us=\"Parallel Rays\"></span>\n" +
            "            <span name=\"chart_str_fib_retrace\" zh_tw=\"斐波納契回調\" zh_cn=\"斐波纳契回调\" en_us=\"Fibonacci Retracements\"></span>\n" +
            "            <span name=\"chart_str_fib_fans\" zh_tw=\"斐波納契扇形\" zh_cn=\"斐波纳契扇形\" en_us=\"Fibonacci Fans\"></span>\n" +
            "\n" +
            "            <span name=\"chart_str_updated\" zh_tw=\"更新於\" zh_cn=\"更新于\" en_us=\"Updated\"></span>\n" +
            "            <span name=\"chart_str_ago\" zh_tw=\"前\" zh_cn=\"前\" en_us=\"ago\"></span>\n" +
            "</div>\n";
    }

}