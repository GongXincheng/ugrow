package com.hyg.controller;

import com.hyg.entity.User;
import com.hyg.service.UserService;
import com.hyg.utils.MyResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * 用户 Controller
 */
@Controller
public class UserController {

    private static final String SESSION_LOGIN_KEY = "loginUser";
    private static final String SESSION_YZM_KEY = "yzm";

    @Autowired
    private UserService userService;

    /**
     * 用户登录
     * @param user 用户信息
     * @param yanZhengMa 验证码
     * @param request HttpServletRequest
     * @return
     */
    @RequestMapping("/login")
    @ResponseBody
    public MyResult login(User user, String yanZhengMa, HttpServletRequest request){
        //判断验证码是否正确
        HttpSession session = request.getSession();
        String yzm = (String) session.getAttribute(SESSION_YZM_KEY);
        if(!yanZhengMa.equalsIgnoreCase(yzm)){
            return MyResult.build(201,"验证码输入有误");
        }
        //数据库查询
        MyResult result = userService.login(user);
        //将登陆的用户信息放入session中
        session.setAttribute(SESSION_LOGIN_KEY,(User)result.getData());
        return result;
    }

    /**
     * 退出登录
     * @param request HttpServletRequest
     * @return
     */
    @RequestMapping("/logout")
    public String logout(HttpServletRequest request){
        HttpSession session = request.getSession();
        session.removeAttribute(SESSION_LOGIN_KEY);
        session.invalidate();
        return "redirect:/index.html";
    }

    /**
     * 判断是否登录
     * @param request HttpServletRequest
     * @return
     */
    @RequestMapping("/hasLogin")
    @ResponseBody
    public MyResult hasLogin(HttpServletRequest request){
        User user = checkUserLogin(request.getSession());
        if(user == null){
            return MyResult.build(201,"用户未登录");
        }
        return MyResult.build(200,"登录成功");
    }


    /**
     * 判断用户是否登录
     * @param session session
     * @return
     */
    public static User checkUserLogin(HttpSession session){
        User loginUser = (User)session.getAttribute(SESSION_LOGIN_KEY);
        return loginUser;
    }
}
