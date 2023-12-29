module.exports = {
  "ecmaFeatures": {
    // 解构赋值  
    "destructuring": true,
    // 块级作用域，允许使用let const  
    "blockBindings": true,

  },
  "rules": {
    "array-bracket-spacing": [2, "never"],
    // 控制逗号前后的空格  
    "comma-spacing": [2, { "before": false, "after": true }],
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always  
    "computed-property-spacing": [2,"never"], 
    "eqeqeq": [2, "allow-null"],
    "quotes": [2, "single"],
    "semi": [2, "always"],
  }
};