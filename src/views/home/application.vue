<template>
    <div class="main_form">
        <el-form ref="ruleFormRef" :model="formData" :rules="rules" label-width="140px" size="large" class="form" :inline="true">
            <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="formData.gender">
                    <el-radio label="男性" value=1 />
                    <el-radio label="女性" value=2 />
                </el-radio-group>
            </el-form-item>
            <div></div>
            <el-form-item label="是否拥有房产" prop="ownRealEstate">
                <el-switch v-model="formData.ownRealEstate" />
            </el-form-item>
            <el-form-item label="是否有汽车" prop="ownCar">
                <el-switch v-model="formData.ownCar" />
            </el-form-item>
            <el-form-item label="工作手机" prop="ownWorkPhone">
                <el-switch v-model="formData.ownWorkPhone" />
            </el-form-item>
            <div></div>
             <el-form-item label="总年收入(元)" prop="annualIncome">
                <el-input v-model.number="formData.annualIncome" />
            </el-form-item>
            <div></div>
             <el-form-item label="年龄" prop="age">
                <el-input v-model.number="formData.age" />
            </el-form-item>
             <el-form-item label="工龄(年)" prop="worksYears">
                <el-input v-model.number="formData.worksYears" />
            </el-form-item>
            <div></div>
             <el-form-item label="家中孩子的数量" prop="childNum">
                <el-input v-model.number="formData.childNum" />
            </el-form-item>
            <el-form-item label="家庭成员数量" prop="familySize">
                <el-input v-model.number="formData.familySize" />
            </el-form-item>
            <div></div>
            <el-form-item label="职业" prop="occupationType">
            <el-select v-model="formData.occupationType" placeholder="请选择职业">
                <el-option label="清洁/环卫" value="Cleaning staff" />
                <el-option label="食品/厨师" value="Cooking staff" />
                <el-option label="工人" value="Laborers" />
                <el-option label="安保" value="Security staff" />
                <el-option label="服务人员" value="Waiters/barmen staff" />
                <el-option label="技工" value="Low-skill Laborers" />

                <el-option label="财务人员" value="Accountants" />
                <el-option label="企业员工" value="Core staff" />
                <el-option label="人力资源" value="HR staff" />
                <el-option label="医药员工" value="Medicine staff" />
                <el-option label="私人企业" value="Private service staff" />
                <el-option label="房产员工" value="Realty agents" />
                <el-option label="销售人员" value="Sales staff" />
                <el-option label="秘书/助理" value="Secretaries" />
                <el-option label="管理/经理" value="Managers" />
                <el-option label="信息/科技员工" value="IT staff" />
                <el-option label="高技术人员/研究员/高校" value="High skill tech staff" />

                <el-option label="其他" value="other" />
            </el-select>
            </el-form-item>

             <el-form-item label="居住情况 " prop="houseType">
            <el-select v-model="formData.houseType" placeholder="请选择居住情况">
                
                <el-option label="与父母住" value="Parents" />
                <el-option label="政府住房" value="Municipal" />
                <el-option label="企业住房" value="Co-op" />
                <el-option label="员工宿舍" value="Office" />
                <el-option label="租住/合租" value="Rented" />
                <el-option label="自住房" value="Owned" />
                <el-option label="其他" value="other" />
            </el-select>
            </el-form-item>

             <el-form-item label="婚姻状态" prop="marriageStatus">
            <el-select v-model="formData.marriageStatus" placeholder="请选择婚姻状态">
                <el-option label="已婚" value="Married" />
                <el-option label="离婚" value="Separated" />
                <el-option label="单身" value="Single" />
                <el-option label="丧偶" value="Widow" />
            </el-select>
            </el-form-item>

             <el-form-item label="学历情况" prop="educationStatus">
            <el-select v-model="formData.educationStatus" placeholder="请选择学历情况">
                <el-option label="中学" value="Secondary School" />
                <el-option label="大学以及以上" value="University" />
                <el-option label="大学辍学" value="Incomplete University" />
                <el-option label="中学以下" value="Lower secondary " />
            </el-select>
            </el-form-item>

            <div></div>
            <el-form-item>
                <el-button type="primary" @click="submitFormLR(ruleFormRef)">提交（逻辑回归）</el-button>
                <el-button type="success" @click="submitFormDT(ruleFormRef)">提交（决策树）</el-button>
                <el-button type="info" @click="submitFormRF(ruleFormRef)">提交（随机森林）</el-button>
                <el-button type="warning" @click="submitFormANN(ruleFormRef)">提交（神经网络）</el-button>
                <el-button @click="resetForm(ruleFormRef)">重制</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import formData from "./formData";
import { FormInstance, FormRules } from 'element-plus'

export default defineComponent({
    setup() {
        let formData: formData = reactive({
            gender: 1,
            ownRealEstate: false,
            ownCar: false,
            ownWorkPhone: false,
            annualIncome: 0,
            childNum: 0,
            age: 18,
            worksYears: 0,
            occupationType: "",
            familySize: 0,
            houseType: "",
            educationStatus: "",
            marriageStatus: "",
        })

        const ruleFormRef = ref<FormInstance>()

        const rules = reactive<FormRules>({
            gender: [
                { required: true, message: '请选择性别', trigger: 'blur' },
            ],

             ownRealEstate: [
                { required: true, message: '滑动选择是否有房产', trigger: 'blur' },
            ],
             ownCar: [
                { required: true, message: '滑动选择是否有车', trigger: 'blur' },
            ],
             ownWorkPhone: [
                { required: true, message: '滑动选择是有有工作手机', trigger: 'blur' },
            ],

            annualIncome: [
                {
                    required: true,
                    type: 'number', 
                    message: '年收入必须为整数数字',
                    trigger: 'change',
                },
            ],

            childNum: [
                {
                    required: true,
                    type: 'number', 
                    message: '孩子数量必须为整数数字',
                    trigger: 'change',
                },
            ],

            age: [
                {
                    required: true,
                    type: 'number', 
                    message: '年龄必须为整数数字',
                    trigger: 'change',
                },
            ],

            worksYears: [
                {
                    required: true,
                    type: 'number', 
                    message: '工作年数必须为整数数字',
                    trigger: 'change',
                },
            ],

            familySize: [
                {
                    required: true,
                    type: 'number', 
                    message: '家庭成员数量必须为整数数字',
                    trigger: 'change',
                },
            ],

            educationStatus: [
                {
                    required: true,
                    message: '请选择学历状况',
                    trigger: 'change',
                },
            ],
             marriageStatus: [
                {
                    required: true,
                    message: '请选择婚姻状况',
                    trigger: 'change',
                },
            ],
             houseType: [
                {
                    required: true,
                    message: '请选择学住房情况',
                    trigger: 'change',
                },
            ],
             occupationType: [
                {
                    required: true,
                    message: '请选择职业',
                    trigger: 'change',
                },
            ],
        })

        const submitFormLR = async (formEl: FormInstance | undefined) => {
            if (!formEl) return
            await formEl.validate((valid: any, fields: any) => {
                if (valid) {
                    console.log('submit!')
                    console.log(formData)
                } else {
                    console.log('error submit!', fields)
                }
            })
        }

        const submitFormDT = async (formEl: FormInstance | undefined) => {
            if (!formEl) return
            await formEl.validate((valid: any, fields: any) => {
                if (valid) {
                    console.log('submit!')
                    console.log(formData)
                } else {
                    console.log('error submit!', fields)
                }
            })
        }

        const submitFormRF = async (formEl: FormInstance | undefined) => {
            if (!formEl) return
            await formEl.validate((valid: any, fields: any) => {
                if (valid) {
                    console.log('submit!')
                    console.log(formData)
                } else {
                    console.log('error submit!', fields)
                }
            })
        }

        const submitFormANN = async (formEl: FormInstance | undefined) => {
            if (!formEl) return
            await formEl.validate((valid: any, fields: any) => {
                if (valid) {
                    console.log('submit!')
                    console.log(formData)
                } else {
                    console.log('error submit!', fields)
                }
            })
        }

        const resetForm = (formEl: FormInstance | undefined) => {
            if (!formEl) return
            formEl.resetFields()
        }

        return {
            formData,
            ruleFormRef,
            rules,
            submitFormLR,
            submitFormDT,
            submitFormRF,
            submitFormANN,
            resetForm,
        }
    },
    components: {}
})

</script>
<style scoped>
.main_form {
    margin-top: 50px;
    text-align: center;
}
</style>