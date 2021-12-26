class Api::V1::ToolsController < ApplicationController
    before_action :set_tool, only: [:show, :edit, :update, :destroy]

    skip_before_action :verify_authenticity_token
  
    # GET /tools
    # GET /tools.json
    def index
      @tools = Tool.all.order(tooltype: :asc)
      render json: @tools
    end
  
    # GET /tools/1
    # GET /tools/1.json
    def show
      if @tool
        render json: @tool
      else
        render json: @tool.errors
      end
    end
  
    # GET /tools/new
    def new
      @tool = Tool.new
    end
  
    # GET /tools/1/edit
    def edit
    end
  
    # POST /tools
    # POST /tools.json
    def create
      @tool = Tool.new(tool_params)
  
  
      if @tool.save
        render json: @tool
      else
        render json: @tool.errors
      end
    end
  
    # PATCH/PUT /tools/1
    # PATCH/PUT /tools/1.json
    def update
    end
  
    # DELETE /tools/1
    # DELETE /tools/1.json
    def destroy
      @tool.destroy
  
      render json: { notice: 'Tool was successfully removed.' }
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_tool
        @tool = Tool.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def tool_params
        params.permit(:tooltype, :diameter, :length, :quantity)
      end
  end