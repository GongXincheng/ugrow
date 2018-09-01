package com.hyg.interceptor;

import com.hyg.controller.UserController;
import com.hyg.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 登录拦截器
 */
public class LoginInterceptor implements HandlerInterceptor {

    private final Logger logger = LoggerFactory.getLogger(LoginInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        StringBuffer requestURL = request.getRequestURL();
        logger.info("=======================================================================");
        logger.info("请求的IP：" + request.getRemoteAddr());
        logger.info("请求Header：" + request.getHeader("user-agent"));
        logger.info("请求URL：" + requestURL.toString());
        logger.info("=======================================================================");

        if(requestURL.toString().contains("/keyWord/")){
            //判断是否为空
            User user = UserController.checkUserLogin(request.getSession());
            if(user == null){
                response.sendRedirect("/page/login.html");
                return false;
            }
        }

        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
